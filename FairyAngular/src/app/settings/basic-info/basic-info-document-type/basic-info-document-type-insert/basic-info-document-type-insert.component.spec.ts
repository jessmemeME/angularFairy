import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoDocumentTypeInsertComponent } from './basic-info-document-type-insert.component';

describe('BasicInfoDocumentTypeInsertComponent', () => {
  let component: BasicInfoDocumentTypeInsertComponent;
  let fixture: ComponentFixture<BasicInfoDocumentTypeInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoDocumentTypeInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoDocumentTypeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
