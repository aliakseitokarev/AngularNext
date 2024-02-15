import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item';
import { ISortOptions } from 'src/app/models/sort-options';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnChanges {
  @Input() public isFilters: boolean = false;
  @Input() public isFirstSubmit: boolean = false;
  @Input() public searchItems: ISearchItem[] = [];

  public filterText: string = '';
  public sortOptions?: ISortOptions;

  public ngOnChanges(): void {
    if (!this.isFilters) {
      this.filterText = '';
      this.sortOptions = undefined;
    }
  }

  public filterItems(filteringTextData: string): void {
    this.filterText = filteringTextData;
  }

  public sortItems(sortOptions: ISortOptions): void {
    this.sortOptions = sortOptions;
  }
}
