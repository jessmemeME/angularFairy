import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialMeetingComponent } from './initial-meeting.component';

describe('InitialMeetingComponent', () => {
  let component: InitialMeetingComponent;
  let fixture: ComponentFixture<InitialMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitialMeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
