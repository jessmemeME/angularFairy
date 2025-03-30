import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleCardComponent } from './couple-card.component';

describe('CoupleCardComponent', () => {
  let component: CoupleCardComponent;
  let fixture: ComponentFixture<CoupleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoupleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoupleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
