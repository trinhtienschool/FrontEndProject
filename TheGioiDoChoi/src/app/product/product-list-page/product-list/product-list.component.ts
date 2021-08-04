import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {PaginationService} from "../../../service/pagination/pagination.service";
import {ProductService} from "../../../service/product/product.service";
import {Pagination} from "../../../model/pagination";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[]|undefined

    public pagination: Pagination|undefined
  constructor(private paginationService: PaginationService,private productService: ProductService,
              private activateRoute: ActivatedRoute) {
    productService.products$.subscribe(products =>{
      this.products = products;
    })
    paginationService.pagination$.subscribe(pagination =>{
      this.pagination = pagination;
    })


    this.activateRoute.queryParams.subscribe(params =>{
      const initCheckAge = params.age;
      const initCheckGender = params.gender;
      const initCategory = params.category;
      this.productService.ageFilter.push(initCheckAge);
      this.productService.genderFilter.push(initCheckGender);
      const categoryFilter ='';
      // switch (initCategory){
      //   case 'dcvd': categoryFilter =
      // }
    })
  }

  ngOnInit(): void {
  }

}
