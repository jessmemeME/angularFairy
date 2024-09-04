import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoRelationshipBusinessUpdateComponent } from './basic-info-relationship-business-update.component';

describe('BasicInfoRelationshipBusinessUpdateComponent', () => {
  let component: BasicInfoRelationshipBusinessUpdateComponent;
  let fixture: ComponentFixture<BasicInfoRelationshipBusinessUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoRelationshipBusinessUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoRelationshipBusinessUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
