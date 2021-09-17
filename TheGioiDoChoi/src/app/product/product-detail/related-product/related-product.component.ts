import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product/product.service";
import {CartService} from "../../../service/cart/cart.service";

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit,AfterViewInit {
  public listProducts: Product[]|undefined;
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

  ngAfterViewInit(): void {
    setTimeout(()=>{
      console.log('random products: ',this.productService.getRandomProducts());
      this.listProducts = this.productService.getRandomProducts();
    },500)

  }
}
