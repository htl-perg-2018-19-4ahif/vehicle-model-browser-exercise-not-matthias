import { TestBed } from '@angular/core/testing';

import { VehicleApiService } from './vehicle-api.service';

describe('VehicleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleApiService = TestBed.get(VehicleApiService);
    expect(service).toBeTruthy();
  });
});
