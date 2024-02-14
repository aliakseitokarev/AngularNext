import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item';
import { ISortOptions } from '../models/sort-options';
import { sortFunc } from '../common/helper';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    searchItems: ISearchItem[],
    searchOptions?: ISortOptions
  ): ISearchItem[] {
    let sortedItems: ISearchItem[] = [...searchItems];
    const sortDirection = searchOptions?.sortDirection === 'asc' ? 1 : -1;
    switch (searchOptions?.sortType) {
      case 'date':
        sortedItems.sort((a, b) =>
          sortFunc(
            Date.parse(a.snippet.publishedAt),
            Date.parse(b.snippet.publishedAt),
            sortDirection
          )
        );
        break;
      case 'viewsCount':
        sortedItems.sort((a, b) =>
          sortFunc(
            +a.statistics.viewCount,
            +b.statistics.viewCount,
            sortDirection
          )
        );
        break;
      default:
        sortedItems = searchItems;
    }
    return sortedItems;
  }
}
