import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatisticComponent } from './card-statistic.component';

describe('CardStatisticComponent', () => {
  let component: CardStatisticComponent;
  let fixture: ComponentFixture<CardStatisticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStatisticComponent]
    });
    fixture = TestBed.createComponent(CardStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
