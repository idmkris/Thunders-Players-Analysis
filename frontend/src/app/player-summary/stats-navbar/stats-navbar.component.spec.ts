import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsNavbarComponent } from './stats-navbar.component';

describe('StatsNavbarComponent', () => {
  let component: StatsNavbarComponent;
  let fixture: ComponentFixture<StatsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
