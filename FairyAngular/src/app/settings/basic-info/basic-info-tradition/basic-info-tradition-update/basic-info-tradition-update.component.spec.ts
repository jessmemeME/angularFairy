import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTraditionUpdateComponent } from './basic-info-tradition-update.component';

describe('BasicInfoTraditionUpdateComponent', () => {
  let component: BasicInfoTraditionUpdateComponent;
  let fixture: ComponentFixture<BasicInfoTraditionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoTraditionUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoTraditionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
