import { TestBed } from '@angular/core/testing';

import { BasicInfoServiceService } from './basic-info-service.service';

describe('BasicInfoServiceService', () => {
  let service: BasicInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
