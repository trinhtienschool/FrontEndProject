import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../model/product";
import {CartService} from "../../../../service/messenger/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product | undefined
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  handleAddToCart(){
    if(this.productItem != undefined){
      this.cartService.addCart(this.productItem, 1);
    }
  }
}
