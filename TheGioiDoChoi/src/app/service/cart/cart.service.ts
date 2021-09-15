import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../model/product";
import {CartItem} from "../../model/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: CartItem[] = [];
  behaviorSubject: BehaviorSubject<any> = new BehaviorSubject('');
  cart$: Observable<any> = this.behaviorSubject.asObservable();

  constructor() {
  }

  // Todo: Thêm sản phẩm vào giỏ hàng và khi sản phẩm bị trùng sẽ tăng số lượng
  addCart(product: Product, quan: number){
    var productName = product.name
    let index=-1
    for(let i=0; i<this.cart.length; i++){
      if(productName === this.cart[i].name) {
          this.cart[i].quantity += quan;
          index = i
          break
      }
    }
    if(index == -1){
      if(product.price_sale == 0){
        this.cart.push(new CartItem(product.name,product.images[0],product.price,quan,product.product_id));
        this.behaviorSubject.next(this.cart);
      } else if (product.price_sale != 0){
        this.cart.push(new CartItem(product.name,product.images[0],product.price_sale,quan,product.product_id));
        this.behaviorSubject.next(this.cart);
      }

    }
  }

  // Todo: Xóa sản phẩm khỏi giỏ hàng
  deleteItemProduct(cartItem: CartItem){
    for(let i=0; i<this.cart.length; i++){
      if(this.cart[i].name === cartItem.name){
        this.cart.splice(i,1)
        this.behaviorSubject.next(this.cart)
        return
      }
    }
  }
  // Todo: Xóa tất cả sản phẩm khỏi giỏ hàng
  resetCart(){
    for(let i=0; i<this.cart.length; i++){
      this.cart.splice(i,1)
      this.behaviorSubject.next(this.cart)
    }
  }
}
