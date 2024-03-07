import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoCultureInsertComponent } from './basic-info-culture-insert.component';

describe('BasicInfoCultureInsertComponent', () => {
  let component: BasicInfoCultureInsertComponent;
  let fixture: ComponentFixture<BasicInfoCultureInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoCultureInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoCultureInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
