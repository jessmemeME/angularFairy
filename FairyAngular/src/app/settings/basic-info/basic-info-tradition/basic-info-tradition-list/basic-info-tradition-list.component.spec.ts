import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTraditionListComponent } from './basic-info-tradition-list.component';

describe('BasicInfoTraditionListComponent', () => {
  let component: BasicInfoTraditionListComponent;
  let fixture: ComponentFixture<BasicInfoTraditionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoTraditionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoTraditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
