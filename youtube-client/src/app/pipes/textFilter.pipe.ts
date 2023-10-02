import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item';

@Pipe({
  name: 'textFilter',
})
export class TextFilterPipe implements PipeTransform {
  transform(searchItems: ISearchItem[], filterText: string): ISearchItem[] {
    return searchItems.filter((item) =>
      item.snippet.title
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  }
}
