import { TestBed } from '@angular/core/testing';

import { GlobalCommunicationService } from './global-communication.service';

describe('GlobalCommunicationService', () => {
  let service: GlobalCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
