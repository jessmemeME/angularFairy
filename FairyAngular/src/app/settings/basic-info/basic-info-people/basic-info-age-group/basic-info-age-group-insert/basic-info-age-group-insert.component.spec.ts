import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoAgeGroupInsertComponent } from './basic-info-age-group-insert.component';

describe('BasicInfoAgeGroupInsertComponent', () => {
  let component: BasicInfoAgeGroupInsertComponent;
  let fixture: ComponentFixture<BasicInfoAgeGroupInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoAgeGroupInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoAgeGroupInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
