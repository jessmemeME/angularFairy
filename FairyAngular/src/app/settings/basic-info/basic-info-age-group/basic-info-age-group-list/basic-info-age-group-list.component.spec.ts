import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoAgeGroupListComponent } from './basic-info-age-group-list.component';

describe('BasicInfoAgeGroupListComponent', () => {
  let component: BasicInfoAgeGroupListComponent;
  let fixture: ComponentFixture<BasicInfoAgeGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoAgeGroupListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoAgeGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
