import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {PaginationService} from "../../service/pagination/pagination.service";
import {Pagination} from "../../model/pagination";

@Component({
  selector: 'app-shop-toolbar',
  templateUrl: './shop-toolbar.component.html',
  styleUrls: ['./shop-toolbar.component.scss']
})
export class ShopToolbarComponent implements OnInit {

  public pagination: Pagination|undefined;
  constructor(private paginationService: PaginationService, private productService: ProductService) {
    paginationService.pagination$.subscribe(pagination =>{
      this.pagination = pagination;
    })
  }

  ngOnInit(): void {
  }
  sort(value: string){
    console.log("change: "+value);
    if(value =='increase'){
      this.productService.sortType = 'increase';
    }else if(value == 'decrease') this.productService.sortType = 'decrease';
    this.productService.filter();
  }

}
