import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoGenderListComponent } from './basic-info-gender-list.component';

describe('BasicInfoGenderListComponent', () => {
  let component: BasicInfoGenderListComponent;
  let fixture: ComponentFixture<BasicInfoGenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoGenderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoGenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
