import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() searchItem?: ISearchItem;
}
