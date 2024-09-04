import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoReligionUpdateComponent } from './basic-info-religion-update.component';

describe('BasicInfoReligionUpdateComponent', () => {
  let component: BasicInfoReligionUpdateComponent;
  let fixture: ComponentFixture<BasicInfoReligionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoReligionUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoReligionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
