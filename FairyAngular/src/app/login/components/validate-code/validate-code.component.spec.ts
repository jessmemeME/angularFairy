import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCodeComponent } from './validate-code.component';

describe('ValidateCodeComponent', () => {
  let component: ValidateCodeComponent;
  let fixture: ComponentFixture<ValidateCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidateCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
