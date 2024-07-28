import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoRelationshipBusinessInsertComponent } from './basic-info-relationship-business-insert.component';

describe('BasicInfoRelationshipBusinessInsertComponent', () => {
  let component: BasicInfoRelationshipBusinessInsertComponent;
  let fixture: ComponentFixture<BasicInfoRelationshipBusinessInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoRelationshipBusinessInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoRelationshipBusinessInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
