import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAppliedComponent } from './dashboard-applied.component';

describe('DashboardAppliedComponent', () => {
  let component: DashboardAppliedComponent;
  let fixture: ComponentFixture<DashboardAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
