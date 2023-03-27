import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppliesJobComponent } from './list-applies-job.component';

describe('ListAppliesJobComponent', () => {
  let component: ListAppliesJobComponent;
  let fixture: ComponentFixture<ListAppliesJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppliesJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAppliesJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
