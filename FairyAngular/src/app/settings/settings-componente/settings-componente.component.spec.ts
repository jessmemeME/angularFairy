import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponenteComponent } from './settings-componente.component';

describe('SettingsComponenteComponent', () => {
  let component: SettingsComponenteComponent;
  let fixture: ComponentFixture<SettingsComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
