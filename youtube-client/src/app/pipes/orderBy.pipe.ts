import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item';
import { ISortOptions } from '../models/sort-options';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    searchItems: ISearchItem[],
    searchOptions?: ISortOptions
  ): ISearchItem[] {
    let sortedItems: ISearchItem[] = [...searchItems];
    switch (searchOptions?.sortType) {
      case 'date':
        if (searchOptions.sortDirection === 'asc')
          sortedItems.sort(
            (a, b) =>
              Date.parse(a.snippet.publishedAt) -
              Date.parse(b.snippet.publishedAt)
          );
        else
          sortedItems.sort(
            (a, b) =>
              Date.parse(b.snippet.publishedAt) -
              Date.parse(a.snippet.publishedAt)
          );
        break;
      case 'viewsCount':
        if (searchOptions.sortDirection === 'asc')
          sortedItems.sort(
            (a, b) => +a.statistics.viewCount - +b.statistics.viewCount
          );
        else
          sortedItems.sort(
            (a, b) => +b.statistics.viewCount - +a.statistics.viewCount
          );
        break;
      default:
        sortedItems = searchItems;
    }
    return sortedItems;
  }
}
