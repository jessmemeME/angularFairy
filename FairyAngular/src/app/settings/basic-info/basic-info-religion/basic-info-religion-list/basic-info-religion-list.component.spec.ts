import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoReligionListComponent } from './basic-info-religion-list.component';

describe('BasicInfoReligionListComponent', () => {
  let component: BasicInfoReligionListComponent;
  let fixture: ComponentFixture<BasicInfoReligionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoReligionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoReligionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
