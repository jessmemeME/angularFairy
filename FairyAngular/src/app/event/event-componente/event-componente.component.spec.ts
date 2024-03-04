import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponenteComponent } from './event-componente.component';

describe('EventComponenteComponent', () => {
  let component: EventComponenteComponent;
  let fixture: ComponentFixture<EventComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
