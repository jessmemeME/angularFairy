import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoDocumentTypeListComponent } from './basic-info-document-type-list.component';

describe('BasicInfoDocumentTypeListComponent', () => {
  let component: BasicInfoDocumentTypeListComponent;
  let fixture: ComponentFixture<BasicInfoDocumentTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoDocumentTypeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoDocumentTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
