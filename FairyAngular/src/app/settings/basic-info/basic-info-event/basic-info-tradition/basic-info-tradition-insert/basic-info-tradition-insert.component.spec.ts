import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTraditionInsertComponent } from './basic-info-tradition-insert.component';

describe('BasicInfoTraditionInsertComponent', () => {
  let component: BasicInfoTraditionInsertComponent;
  let fixture: ComponentFixture<BasicInfoTraditionInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoTraditionInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoTraditionInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
