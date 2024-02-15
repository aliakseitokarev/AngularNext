import { Component } from '@angular/core';
import { ISearchItem } from './models/search-item';
import { searchMockResponse } from './mocks/youtube-response.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'youtube-client';
  public searchItems: ISearchItem[] = searchMockResponse.items;
  public isFilters = false;
  public isFirstSubmit = false;

  public toggleFilterBlock(isFiltersTrue: boolean): void {
    this.isFilters = isFiltersTrue;
  }

  public submitRequest(requestData: string): void {
    this.isFirstSubmit = true;
  }
}
