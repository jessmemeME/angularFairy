import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoCultureUpdateComponent } from './basic-info-culture-update.component';

describe('BasicInfoCultureUpdateComponent', () => {
  let component: BasicInfoCultureUpdateComponent;
  let fixture: ComponentFixture<BasicInfoCultureUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoCultureUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoCultureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
