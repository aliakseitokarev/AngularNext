import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISearchItemStatistics } from 'src/app/models/statistics';

@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardStatisticComponent {
  @Input() statistics?: ISearchItemStatistics;
}
