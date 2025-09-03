import { TestBed } from '@angular/core/testing';

import { WorldBankApi } from './world-bank-api';

describe('WorldBankApi', () => {
  let service: WorldBankApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldBankApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
