import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";
import {CartService} from "../../service/cart/cart.service";

@Component({
  selector: 'app-loveable',
  templateUrl: './loveable.component.html',
  styleUrls: ['./loveable.component.scss']
})
export class LoveableComponent implements OnInit {
  public listProducts: Product[] =[];
  productQuickView: Product | undefined
  constructor(private productService: ProductService,
              private cartService: CartService) {
    this.listProducts = productService.allProductsArr
  }

  ngOnInit(): void {

  }
  handleAddToCart(product: Product){
    this.cartService.addCart(product, 1)
  }

  getQuickView($event: Product) {
    this.productQuickView = $event
  }
}

