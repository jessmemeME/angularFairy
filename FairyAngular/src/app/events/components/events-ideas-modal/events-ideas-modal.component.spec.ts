import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsIdeasModalComponent } from './events-ideas-modal.component';

describe('EventsIdeasModalComponent', () => {
  let component: EventsIdeasModalComponent;
  let fixture: ComponentFixture<EventsIdeasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsIdeasModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsIdeasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
