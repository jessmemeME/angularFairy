import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoReligionInsertComponent } from './basic-info-religion-insert.component';

describe('BasicInfoReligionInsertComponent', () => {
  let component: BasicInfoReligionInsertComponent;
  let fixture: ComponentFixture<BasicInfoReligionInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoReligionInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoReligionInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
