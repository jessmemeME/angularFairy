import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { moduleGuard } from './module.guard';

describe('moduleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => moduleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
