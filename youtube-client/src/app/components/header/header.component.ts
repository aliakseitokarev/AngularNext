import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() public loginName: string = 'Your name';
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
