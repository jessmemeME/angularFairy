import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTypeOfDinerUpdateComponent } from './basic-info-type-of-diner-update.component';

describe('BasicInfoTypeOfDinerUpdateComponent', () => {
  let component: BasicInfoTypeOfDinerUpdateComponent;
  let fixture: ComponentFixture<BasicInfoTypeOfDinerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoTypeOfDinerUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoTypeOfDinerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
