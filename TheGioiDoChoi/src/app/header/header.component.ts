import { Component, OnInit } from '@angular/core';
import {CartItem} from "../model/cart-item";
import {CartService} from "../service/cart/cart.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Util} from "../model/util";
import {ProductService} from "../service/product/product.service";
import {timer} from "rxjs";
import {switchMap} from "rxjs/operators";
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

  constructor(private service:CartService, private router: Router,private productService: ProductService,
              private activateRoute: ActivatedRoute) {
    this.service.cart$.subscribe(cart=>{this.cartItemHeader=cart})
  this.activateRoute.queryParams.subscribe(params => {
      this.category = params.category;
      this.startPrice = params.startPrice;
      this.endPrice = params.endPrice;
      this.search = params.search;
      this.sort = params.sort;
      this.page = params.page;

      if (params.age != undefined) this.age =[].concat(params.age); else this.age = undefined;
      if (params.gender != undefined) this.gender =[].concat(params.gender); else this.gender = undefined;
    });
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
    let link = Util.makeLinkProduc(this.category, this.startPrice, this.endPrice, this.age, this.gender,text, this.sort,this.page);
    this.router.navigateByUrl(link);
  }

}
