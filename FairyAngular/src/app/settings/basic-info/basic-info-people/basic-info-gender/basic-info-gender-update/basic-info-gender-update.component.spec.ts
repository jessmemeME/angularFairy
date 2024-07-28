import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoGenderUpdateComponent } from './basic-info-gender-update.component';

describe('BasicInfoGenderUpdateComponent', () => {
  let component: BasicInfoGenderUpdateComponent;
  let fixture: ComponentFixture<BasicInfoGenderUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoGenderUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoGenderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
