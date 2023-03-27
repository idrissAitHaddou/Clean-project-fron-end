import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfilesUserComponent } from './social-profiles-user.component';

describe('SocialProfilesUserComponent', () => {
  let component: SocialProfilesUserComponent;
  let fixture: ComponentFixture<SocialProfilesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialProfilesUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialProfilesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
