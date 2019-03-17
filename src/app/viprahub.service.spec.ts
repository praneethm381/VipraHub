import { TestBed } from '@angular/core/testing';

import { ViprahubService } from './viprahub.service';

describe('ViprahubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViprahubService = TestBed.get(ViprahubService);
    expect(service).toBeTruthy();
  });
});
