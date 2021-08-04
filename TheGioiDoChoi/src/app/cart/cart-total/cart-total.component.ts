import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../model/cart-item";
import {CartService} from "../../service/cart/cart.service";

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {
  cartItems : CartItem[] = [
    new CartItem("Bộ câu cá dã ngoại",'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/b/t/bt2540z_1.jpg', 449000, 1),
    new CartItem("Chuyến dã ngoại mùa hè", 'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/4/1/41681_1_.jpg', 1599000, 2)
  ]

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

  // todo Tổng cộng
  grandTotal():number{
    return this.subTotal() + 20000
  }

}
