import { TestBed } from '@angular/core/testing';

import { VehicleProviderService } from './vehicle-provider.service';

describe('VehicleProviderService', () => {
  let service: VehicleProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
