import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoComponenteComponent } from './basic-info-componente.component';

describe('BasicInfoComponenteComponent', () => {
  let component: BasicInfoComponenteComponent;
  let fixture: ComponentFixture<BasicInfoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicInfoComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInfoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
