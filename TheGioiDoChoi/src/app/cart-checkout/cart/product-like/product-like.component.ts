import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "src/app/service/product/product.service";

@Component({
  selector: 'app-product-like',
  templateUrl: './product-like.component.html',
  styleUrls: ['./product-like.component.scss']
})
export class ProductLikeComponent implements OnInit {

  listProducts: Product[]=[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts = this.productService.allProductsArr;
  }

}
