import { Component, OnInit } from '@angular/core';
import {CartItem} from "../model/cart-item";
import {CartService} from "../service/messenger/cart.service";
declare const onloadFunction: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartItemHeader: CartItem[]=[]

  constructor(private service:CartService) {
    this.service.cart$.subscribe(cart=>{this.cartItemHeader=cart})
  }
  public deleteCartItem(cartItem: CartItem){
    this.service.deleteItemProduct(cartItem)
  }
  public  totalPriceOfAllProduct(){
    let sum =0
    for(let c of this.cartItemHeader){
      sum+=c.totalPrice();
    }
    return sum;
  }
  public numberOfListProduct(){
    let number=0;
    for(let c of this.cartItemHeader){
      number+=1;
    }
    return number;
  }
  ngOnInit(): void {
    onloadFunction();
  }

}
