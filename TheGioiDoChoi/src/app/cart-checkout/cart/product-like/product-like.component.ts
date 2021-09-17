import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "src/app/service/product/product.service";

@Component({
  selector: 'app-product-like',
  templateUrl: './product-like.component.html',
  styleUrls: ['./product-like.component.scss']
})
export class ProductLikeComponent implements OnInit, AfterViewInit {
  productQuickView: Product|undefined;
  listProducts: Product[] | undefined
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts = this.productService.allProductsArr;
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
