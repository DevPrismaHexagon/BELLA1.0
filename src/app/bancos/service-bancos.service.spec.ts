import { TestBed } from '@angular/core/testing';

import { ServiceBancosService } from './service-bancos.service';

describe('ServiceBancosService', () => {
  let service: ServiceBancosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBancosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
