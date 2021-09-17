import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {PaginationService} from "../../../service/pagination/pagination.service";
import {ProductService} from "../../../service/product/product.service";
import {Pagination} from "../../../model/pagination";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[]|undefined
  public product: Product | undefined;
    public pagination: Pagination|undefined
  constructor(private productService: ProductService,private paginationService: PaginationService
              ) {
    productService.products$.subscribe(products =>{
      this.products = products;
    })
    paginationService.pagination$.subscribe(pagination =>{
      this.pagination = pagination;
    })

  }

  ngOnInit(): void {
  }

  getProductQuickView($event: Product) {
   this.product = $event;
  }
}
