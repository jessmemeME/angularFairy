import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedStyleComponent } from './wanted-style.component';

describe('WantedStyleComponent', () => {
  let component: WantedStyleComponent;
  let fixture: ComponentFixture<WantedStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WantedStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WantedStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
