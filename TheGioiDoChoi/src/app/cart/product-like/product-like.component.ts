import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";

@Component({
  selector: 'app-product-like',
  templateUrl: './product-like.component.html',
  styleUrls: ['./product-like.component.scss']
})
export class ProductLikeComponent implements OnInit {

  // productList: Product[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // console.log(this.productService.getProducts())
  }

}
