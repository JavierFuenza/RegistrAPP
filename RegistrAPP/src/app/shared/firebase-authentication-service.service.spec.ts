import { TestBed } from '@angular/core/testing';

import { FirebaseAuthenticationServiceService } from './firebase-authentication-service.service';

describe('FirebaseAuthenticationServiceService', () => {
  let service: FirebaseAuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
