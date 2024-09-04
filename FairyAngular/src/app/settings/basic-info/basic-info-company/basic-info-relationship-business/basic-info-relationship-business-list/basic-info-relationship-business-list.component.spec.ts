import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoRelationshipBusinessListComponent } from './basic-info-relationship-business-list.component';

describe('BasicInfoRelationshipBusinessListComponent', () => {
  let component: BasicInfoRelationshipBusinessListComponent;
  let fixture: ComponentFixture<BasicInfoRelationshipBusinessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoRelationshipBusinessListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoRelationshipBusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
