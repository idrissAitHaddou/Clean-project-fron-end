import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAlertComponent } from './crud-alert.component';

describe('CrudAlertComponent', () => {
  let component: CrudAlertComponent;
  let fixture: ComponentFixture<CrudAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
