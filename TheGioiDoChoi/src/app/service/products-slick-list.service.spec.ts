import { TestBed } from '@angular/core/testing';

import { ProductsSlickListService } from './products-slick-list.service';

describe('ProductsSlickListService', () => {
  let service: ProductsSlickListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsSlickListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
