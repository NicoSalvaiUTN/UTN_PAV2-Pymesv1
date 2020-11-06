import { TestBed } from '@angular/core/testing';

import { MockArticuloService } from './mock-articulo.service';

describe('MockArticuloService', () => {
  let service: MockArticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
