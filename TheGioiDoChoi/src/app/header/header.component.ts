import { Component, OnInit } from '@angular/core';
import {CartItem} from "../model/cart-item";
declare const onloadFunction: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartItemHeader: CartItem[]=[
    new CartItem("Do choi1","https://product.hstatic.net/1000117512/product/71uu4o0p2tl._ac_sl1500__eb1c8fbc2c644dafa1e8b735e676f9dd_large.jpg",2000,2),
    new CartItem("Do choi2","https://product.hstatic.net/1000117512/product/60275_alt6_d2c71f1c01234a1b9fd458cdfb60d7a3_f7125e1f23eb47a193c39ccb5d3fb334_large.jpg",2000,3),
    new CartItem("Do choi3","https://product.hstatic.net/1000117512/product/upload_78eae85e980542dbb917ec1678507466_116f5f3b3ed84dbdb3261391683d6b5d_large.jpg",2000,7),
      // new CartItem("Do choi4","https://product.hstatic.net/1000117512/product/71uu4o0p2tl._ac_sl1500__eb1c8fbc2c644dafa1e8b735e676f9dd_large.jpg",2000,6),
      // new CartItem("Do choi5","https://product.hstatic.net/1000117512/product/71uu4o0p2tl._ac_sl1500__eb1c8fbc2c644dafa1e8b735e676f9dd_large.jpg",2000,8),
      // new CartItem("Do choi6","https://product.hstatic.net/1000117512/product/71uu4o0p2tl._ac_sl1500__eb1c8fbc2c644dafa1e8b735e676f9dd_large.jpg",2000,5),
      // new CartItem("Do choi7","https://product.hstatic.net/1000117512/product/71uu4o0p2tl._ac_sl1500__eb1c8fbc2c644dafa1e8b735e676f9dd_large.jpg",2000,5),
  ]

  constructor() { }
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
