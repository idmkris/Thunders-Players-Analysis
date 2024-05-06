import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotsChartComponent } from './shots-chart.component';

describe('ShotsChartComponent', () => {
  let component: ShotsChartComponent;
  let fixture: ComponentFixture<ShotsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
