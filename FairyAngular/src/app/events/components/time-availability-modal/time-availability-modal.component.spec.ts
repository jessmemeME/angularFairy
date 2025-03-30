import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAvailabilityModalComponent } from './time-availability-modal.component';

describe('TimeAvailabilityModalComponent', () => {
  let component: TimeAvailabilityModalComponent;
  let fixture: ComponentFixture<TimeAvailabilityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeAvailabilityModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeAvailabilityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
