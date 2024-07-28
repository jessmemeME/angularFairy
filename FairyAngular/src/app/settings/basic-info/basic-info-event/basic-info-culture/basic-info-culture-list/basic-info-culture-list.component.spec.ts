import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoCultureListComponent } from './basic-info-culture-list.component';

describe('BasicInfoCultureListComponent', () => {
  let component: BasicInfoCultureListComponent;
  let fixture: ComponentFixture<BasicInfoCultureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoCultureListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoCultureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
