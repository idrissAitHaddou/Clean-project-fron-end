import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelJobComponent } from './cancel-job.component';

describe('CancelJobComponent', () => {
  let component: CancelJobComponent;
  let fixture: ComponentFixture<CancelJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
