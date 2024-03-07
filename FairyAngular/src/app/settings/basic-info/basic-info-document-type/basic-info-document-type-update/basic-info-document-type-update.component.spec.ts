import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoDocumentTypeUpdateComponent } from './basic-info-document-type-update.component';

describe('BasicInfoDocumentTypeUpdateComponent', () => {
  let component: BasicInfoDocumentTypeUpdateComponent;
  let fixture: ComponentFixture<BasicInfoDocumentTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoDocumentTypeUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoDocumentTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
