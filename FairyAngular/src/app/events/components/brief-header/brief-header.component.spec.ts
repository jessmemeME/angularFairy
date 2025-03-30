import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefHeaderComponent } from './brief-header.component';

describe('BriefHeaderComponent', () => {
  let component: BriefHeaderComponent;
  let fixture: ComponentFixture<BriefHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BriefHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BriefHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
