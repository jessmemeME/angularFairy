import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoGenderInsertComponent } from './basic-info-gender-insert.component';

describe('BasicInfoGenderInsertComponent', () => {
  let component: BasicInfoGenderInsertComponent;
  let fixture: ComponentFixture<BasicInfoGenderInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoGenderInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoGenderInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
