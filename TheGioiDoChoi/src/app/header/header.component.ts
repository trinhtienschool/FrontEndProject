import { Component, OnInit } from '@angular/core';
import {CartItem} from "../model/cart-item";
import {CartService} from "../service/cart/cart.service";
import {Route, Router} from "@angular/router";
// declare const onloadFunction: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartItemHeader: CartItem[]=[]

  public age: string[]|undefined;
  public gender: string[]|undefined;
  public category: string | undefined;
  public startPrice: string | undefined;
  public endPrice: string | undefined;
  public search: string | undefined;
  public sort: string | undefined;
  public page: string|undefined;

  constructor(private service:CartService, private router: Router) {
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
    // onloadFunction();
    // categoryExpandOnload()
  }
  searchRoute(text: string){

  }

}
