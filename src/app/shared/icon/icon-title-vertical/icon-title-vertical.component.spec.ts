import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTitleVerticalComponent } from './icon-title-vertical.component';

describe('IconTitleVerticalComponent', () => {
  let component: IconTitleVerticalComponent;
  let fixture: ComponentFixture<IconTitleVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTitleVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTitleVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
