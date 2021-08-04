import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {CartService} from "../../service/messenger/cart.service";

@Component({
  selector: 'app-product-card-sale',
  templateUrl: './product-card-sale.component.html',
  styleUrls: ['./product-card-sale.component.scss']
})
export class ProductCardSaleComponent implements OnInit {
 @Input() product: Product|undefined;
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {

  }
  handleAddToCart(){
    if(this.product != undefined){
      this.cartService.addCart(this.product);
    }
  }

}
