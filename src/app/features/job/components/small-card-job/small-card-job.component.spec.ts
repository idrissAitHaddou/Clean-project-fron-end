import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardJobComponent } from './small-card-job.component';

describe('SmallCardJobComponent', () => {
  let component: SmallCardJobComponent;
  let fixture: ComponentFixture<SmallCardJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
