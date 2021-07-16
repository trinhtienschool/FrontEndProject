import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-card-sale',
  templateUrl: './product-card-sale.component.html',
  styleUrls: ['./product-card-sale.component.scss']
})
export class ProductCardSaleComponent implements OnInit {
 @Input() product: Product|undefined;
  constructor() {
   console.log("Dang vao product card sale");
  }

  ngOnInit(): void {
    console.log("Dang vao product card sale component");
  }


}