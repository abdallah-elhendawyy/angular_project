import { TestBed } from '@angular/core/testing';

import { ProductesReqService } from './productes-req.service';

describe('ProductesReqService', () => {
  let service: ProductesReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductesReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
