import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTypesComponent } from './offer-types.component';

describe('OfferTypesComponent', () => {
  let component: OfferTypesComponent;
  let fixture: ComponentFixture<OfferTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
