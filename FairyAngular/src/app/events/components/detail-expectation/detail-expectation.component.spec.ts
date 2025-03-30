import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExpectationComponent } from './detail-expectation.component';

describe('DetailExpectationComponent', () => {
  let component: DetailExpectationComponent;
  let fixture: ComponentFixture<DetailExpectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailExpectationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailExpectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
