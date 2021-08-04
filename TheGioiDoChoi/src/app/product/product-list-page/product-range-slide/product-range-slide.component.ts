import { Component, OnInit } from '@angular/core';
import {Util} from "../../../model/util";
import {ProductService} from "../../../service/product/product.service";

@Component({
  selector: 'app-product-range-slide',
  templateUrl: './product-range-slide.component.html',
  styleUrls: ['./product-range-slide.component.scss']
})
export class ProductRangeSlideComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  click(from: string, to: string){
    console.log("Có click");
    console.log("Nhan: "+from+" : "+to);
    console.log(Util.convertCurrencyToNumber(from));
    console.log(Util.convertCurrencyToNumber(to));
    // this.productService.filterByPrice(Util.convertCurrencyToNumber(from),Util.convertCurrencyToNumber(to));
    this.productService.priceStartFilter = Util.convertCurrencyToNumber(from);
    this.productService.priceEndFilter = Util.convertCurrencyToNumber(to);
    this.productService.filter();
  }
}
