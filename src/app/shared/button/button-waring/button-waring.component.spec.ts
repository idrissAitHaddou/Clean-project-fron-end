import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWaringComponent } from './button-waring.component';

describe('ButtonWaringComponent', () => {
  let component: ButtonWaringComponent;
  let fixture: ComponentFixture<ButtonWaringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWaringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
