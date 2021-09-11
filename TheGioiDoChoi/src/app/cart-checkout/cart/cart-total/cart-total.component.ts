import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../../model/cart-item";
import {CartService} from "../../../service/cart/cart.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {
  cartItems : CartItem[] = []

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart => {
      this.cartItems = cart
    })
  }

  ngOnInit(): void {

  }
  // Todo: Tạm tính
  subTotal():number{
    let result=0
    for(var index in this.cartItems){
      result += this.cartItems[index].totalPrice()
    }
    return result;
  }

  // Todo: Tổng cộng (Tạm tính + Phí vận chuyển:30000)
  grandTotal():number{
    return this.subTotal() + 30000
  }

}
