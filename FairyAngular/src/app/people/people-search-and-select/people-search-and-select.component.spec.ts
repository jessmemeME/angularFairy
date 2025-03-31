import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchAndSelectComponent } from './people-search-and-select.component';

describe('PeopleSearchAndSelectComponent', () => {
  let component: PeopleSearchAndSelectComponent;
  let fixture: ComponentFixture<PeopleSearchAndSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleSearchAndSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleSearchAndSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
