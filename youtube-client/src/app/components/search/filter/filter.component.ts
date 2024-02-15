import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import { ISortOptions } from '../../../models/sort-options';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  @Output() public sortData: EventEmitter<ISortOptions> = new EventEmitter();
  @Output() public filterText: EventEmitter<string> = new EventEmitter();

  public sortOptions: ISortOptions = {
    sortDirection: '',
    sortIconView: '',
    sortType: '',
  };

  public filteringTextData: string = '';

  public onFilter(): void {
    this.filterText.emit(this.filteringTextData.trim());
  }

  public toggleSortDirection(sortType: string): void {
    if (this.sortOptions.sortDirection === 'asc') {
      this.sortOptions.sortDirection = 'desc';
      this.sortOptions.sortIconView = 'keyboard_arrow_up';
    } else {
      this.sortOptions.sortDirection = 'asc';
      this.sortOptions.sortIconView = 'keyboard_arrow_down';
    }
    this.sortOptions.sortType = sortType;
    this.sortData.emit({ ...this.sortOptions });
  }
}
