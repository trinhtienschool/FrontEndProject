import { Component, OnInit } from '@angular/core';
import {CartItem} from "../model/cart-item";
declare const onloadFunction: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public cartItem: CartItem[]=[
    new CartItem("Do choi1","Img1",2000,2),
    new CartItem("Do choi2","Img2",2000,3),
    new CartItem("Do choi3","Img3",2000,5)
  ]

  constructor() { }
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
