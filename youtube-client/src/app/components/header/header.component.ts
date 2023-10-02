import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() isfilterBlock: EventEmitter<boolean> = new EventEmitter();
  @Output() submitRequest: EventEmitter<string> = new EventEmitter();

  public inputText = '';
  public isFilters = false;

  public setSearchRequest(): void {
    this.submitRequest.emit(this.inputText);
  }

  public toggleFilterBlock(): void {
    this.isFilters = this.isFilters ? false : true;
    this.isfilterBlock.emit(this.isFilters);
  }
}
