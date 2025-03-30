import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentativePlaceFormComponent } from './tentative-place-form.component';

describe('TentativePlaceFormComponent', () => {
  let component: TentativePlaceFormComponent;
  let fixture: ComponentFixture<TentativePlaceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TentativePlaceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TentativePlaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
