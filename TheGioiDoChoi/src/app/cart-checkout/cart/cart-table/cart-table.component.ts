import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../../model/cart-item";
import {CartService} from "../../../service/cart/cart.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  // public products: Product[] =[];
  cartItems : CartItem[] = []

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart =>{this.cartItems = cart});
  }

  ngOnInit(): void {

  }

  // todo nút giảm số lượng sản phẩm
  decreaseQuantity(item:CartItem) {
    if(item.quantity>1)
      item.quantity -= 1;
    else if(item.quantity==1)
      this.cartService.deleteItemProduct(item)
  }
  // todo nút tăng số lượng sản phẩm
  increaseQuantity(item:CartItem) {
    item.quantity += 1;
  }

  deleteItem(item: CartItem) {
   this.cartService.deleteItemProduct(item)
    // alert("da vao xóa " + item)
  }
}
