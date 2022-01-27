import { TestBed } from '@angular/core/testing';

import { ServiceComprasService } from './service-compras.service';

describe('ServiceComprasService', () => {
  let service: ServiceComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
