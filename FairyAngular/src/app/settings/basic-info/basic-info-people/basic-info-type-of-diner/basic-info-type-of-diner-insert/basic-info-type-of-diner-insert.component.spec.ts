import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTypeOfDinerInsertComponent } from './basic-info-type-of-diner-insert.component';

describe('BasicInfoTypeOfDinerInsertComponent', () => {
  let component: BasicInfoTypeOfDinerInsertComponent;
  let fixture: ComponentFixture<BasicInfoTypeOfDinerInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoTypeOfDinerInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoTypeOfDinerInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
