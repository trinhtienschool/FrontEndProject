import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-card-quickview',
  templateUrl: './product-card-quickview.component.html',
  styleUrls: ['./product-card-quickview.component.scss']
})
export class ProductCardQuickviewComponent implements OnInit{
  @Input() product: Product|undefined
  constructor() { }

  ngOnInit(): void {
  }

}
