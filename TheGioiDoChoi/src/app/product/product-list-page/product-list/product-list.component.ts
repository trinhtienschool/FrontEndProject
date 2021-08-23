import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {PaginationService} from "../../../service/pagination/pagination.service";
import {ProductService} from "../../../service/product/product.service";
import {Pagination} from "../../../model/pagination";
import {ActivatedRoute} from "@angular/router";
import {timer} from "rxjs";
import {switchMap} from "rxjs/operators";

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
    timer(500).pipe(switchMap(_=>this.activateRoute.queryParams)).subscribe(params =>{
      const initCheckAge = params.age;
      const initCheckGender = params.gender;
      const initCategory = params.category;
      if(typeof initCheckAge == "string") this.productService.ageFilter.push(initCheckAge);
      else if(Array.isArray(initCheckAge)) this.productService.ageFilter = this.productService.ageFilter.concat(initCheckAge);
      if(typeof initCheckGender =='string') this.productService.genderFilter.push(initCheckGender);
      else if(Array.isArray(initCheckGender)) this.productService.genderFilter = this.productService.genderFilter.concat(initCheckGender);
      this.productService.filter();
      if(initCategory !==undefined){
      let categoryFilter ='';
      switch (initCategory) {
        case 'dcvd':
          categoryFilter = 'dochoidangoai';
          break;
        case 'dctt':
          categoryFilter = 'lego';
          break;
        case 'ptgt':
          categoryFilter = 'mohinhxe';
          break;
        case 'nv':
          categoryFilter = 'bupbe';
          break;
      }
      this.productService.filterCategory(categoryFilter);
      }
    })
    productService.products$.subscribe(products =>{
      this.products = products;
      console.log('productslistttttttttttt: ',this.products);
    })
    paginationService.pagination$.subscribe(pagination =>{
      this.pagination = pagination;
    })

  }

  ngOnInit(): void {
  }

}
