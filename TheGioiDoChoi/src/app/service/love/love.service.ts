import { Injectable } from '@angular/core';
import {CartItem} from "../../model/cart-item";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})
export class LoveService {
  public love: Product[] = [];
  behaviorSubject: BehaviorSubject<any> = new BehaviorSubject('');
  love$: Observable<any> = this.behaviorSubject.asObservable();
  constructor() { }
  // Todo: Thêm sản phẩm yêu thích vào danh sach yeu thich và khi sản phẩm bị trùng sẽ bỏ qua
  addLove(product: Product){
    var productName = product.name;
    let index=-1;
    for(let i=0; i<this.love.length; i++){
      if(productName === this.love[i].name) {
        index = i
        break
      }
    }
    if(index == -1){
      if(product.price_sale == 0){
        this.love.push(new Product(product.name,product.price,product.priceCalculate,product.brand,product.product_id,product.description,product.age,product.gender,product.images,product.category
        ));
        this.behaviorSubject.next(this.love);
      } else if (product.price_sale != 0){
        this.love.push(new Product(product.name,product.price,product.priceCalculate,product.brand,product.product_id,product.description,product.age,product.gender,product.images,product.category));
        this.behaviorSubject.next(this.love);
      }

    }
  }
  // Todo: Xóa sản phẩm yêu thích khỏi danh sách yêu thích
  deleteItemLove(loveItem: Product){
    for(let i=0; i<this.love.length; i++){
      if(this.love[i].name === loveItem.name){
        this.love.splice(i,1)
        this.behaviorSubject.next(this.love)
        return
      }
    }
  }
}
