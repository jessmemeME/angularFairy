import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTypeOfDinerListComponent } from './basic-info-type-of-diner-list.component';

describe('BasicInfoTypeOfDinerListComponent', () => {
  let component: BasicInfoTypeOfDinerListComponent;
  let fixture: ComponentFixture<BasicInfoTypeOfDinerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoTypeOfDinerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoTypeOfDinerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
