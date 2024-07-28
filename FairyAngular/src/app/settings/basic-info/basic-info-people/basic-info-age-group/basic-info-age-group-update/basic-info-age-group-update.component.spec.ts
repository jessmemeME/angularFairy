import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoAgeGroupUpdateComponent } from './basic-info-age-group-update.component';

describe('BasicInfoAgeGroupUpdateComponent', () => {
  let component: BasicInfoAgeGroupUpdateComponent;
  let fixture: ComponentFixture<BasicInfoAgeGroupUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoAgeGroupUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoAgeGroupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
