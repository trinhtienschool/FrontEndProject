import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product/product.service";
import {CartService} from "../../../service/cart/cart.service";

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit {
  public listProducts: Product[] =[];
  constructor(private productService: ProductService,
              private cartService: CartService) {
    this.listProducts = productService.allProductsArr
  }

  ngOnInit(): void {

  }
  handleAddToCart(product: Product){
      this.cartService.addCart(product, 1)
  }

}
