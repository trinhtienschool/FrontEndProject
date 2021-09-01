import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../model/cart-item";
import {CartService} from "../../service/cart/cart.service";
declare const onloadFunction: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public cartItem: CartItem[]=[]

  constructor(private service:CartService) {
    this.service.cart$.subscribe(cart=>{this.cartItem=cart})
  }
  public  totalPriceOfAllProduct(){
    let sum =0
    for(let c of this.cartItem){
      sum+=c.totalPrice();
    }
    return sum;
  }
  public numberOfListProduct(){
    let number=0;
    for(let c of this.cartItem){
      number+=1;
    }
    return number;
  }
  public deleteAcartItem(){

  }
  ngOnInit(): void {
    onloadFunction();
  }

}
