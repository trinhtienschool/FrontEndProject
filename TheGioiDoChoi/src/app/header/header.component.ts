import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CartItem} from "../model/cart-item";
import {CartService} from "../service/cart/cart.service";
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";
import {Util} from "../model/util";
import {ProductService} from "../service/product/product.service";
import {timer} from "rxjs";
import {filter, map, switchMap} from "rxjs/operators";
import {fade} from "../share/animation";
import {LoveService} from "../service/love/love.service";
import {Product} from "../model/product";

// declare const onloadFunction: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fade
  ]
})
export class HeaderComponent implements OnInit, OnChanges {
  public cartItemHeader: CartItem[] = []
  public loveItemHeader: Product[]=[]

  public age: string[] | undefined;
  public gender: string[] | undefined;
  public category: string | undefined;
  public startPrice: string | undefined;
  public endPrice: string | undefined;
  public search: string | undefined;
  public sort: string | undefined;
  public page: string | undefined;

  public navbarfixed:boolean = false;
  public homeActive:boolean=false;
  public productActive:boolean=false;
  public blogActive:boolean=false;
  public contactActive:boolean=false;
  public showToggle:boolean = false;
  public mobileToggle:boolean=false;
  public slideMobileToggle:boolean=false;
  public slideMobileToggle1:boolean=false;
  public slideMobileToggle2:boolean=false;
  public slideMobileToggle3:boolean=false;
  public open = false;
  public selectedMenuItem: string='';
  constructor(private service: CartService, private router: Router, private productService: ProductService,private loveService: LoveService,
              private activateRoute: ActivatedRoute) {

    this.service.cart$.subscribe(cart => {
      this.cartItemHeader = cart
    })
    this.loveService.love$.subscribe(love => {
      this.loveItemHeader = love
    })
    this.activateRoute.queryParams.subscribe(params => {
      // this.category = params.category;
      // this.startPrice = params.startPrice;
      // this.endPrice = params.endPrice;
      this.search = params.search;
      // this.sort = params.sort;
      // this.page = params.page;

      // if (params.age != undefined) this.age = [].concat(params.age); else this.age = undefined;
      // if (params.gender != undefined) this.gender = [].concat(params.gender); else this.gender = undefined;
      // console.log("category header:====",this.category);
    });

    //Lay duong Link
    this.router.events.subscribe(value => {
      if(value instanceof NavigationEnd){
        var myString=value.url;
        var mySubString=myString.split("/")[1];
        mySubString=mySubString.split("?")[0];
        console.log('urlllllllllll is: ',mySubString);

        this.selectedMenuItem = value.url
        if(mySubString=="home"){
          this.homeActive=true;
          this.productActive=false;
          this.blogActive=false;
          this.contactActive=false;
        }else {
          if(mySubString=="product"||mySubString=="cart"||mySubString=="love"){
            this.homeActive=false;
            this.productActive=true;
            this.blogActive=false;
            this.contactActive=false;
          }else {
            if(mySubString=="blog"){
              this.homeActive=false;
              this.productActive=false;
              this.blogActive=true;
              this.contactActive=false;
            }else {
              if(mySubString=="contact"){
                this.homeActive=false;
                this.productActive=false;
                this.blogActive=false;
                this.contactActive=true;
              }else {
                this.homeActive=true;
                this.productActive=false;
                this.blogActive=false;
                this.contactActive=false;
              }
            }
          }
        }
      }
    })
  }
  ngOnChanges(changes: SimpleChanges): void {

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
  //love start
  public deleteLoveItem(love: Product){
    this.loveService.deleteItemLove(love)
  }
  public numberOfListLoveProduct(){
    let number=0;
    for(let c of this.loveItemHeader){
      number+=1;
    }
    return number;
  }
  public getFirstImage(love: Product){
    let listImage=love.images;
    return listImage[0];
  }
  ngOnInit(): void {
    // onloadFunction();
    // categoryExpandOnload()
    console.log("routerrrrrrrrr: ",this.router.url)
  }

  searchRoute(text: string){
    console.log('text');
    // this.page = '1';
    // this.category = undefined;
    // this.startPrice = undefined;
    // this.endPrice = undefined;
    // this.age = undefined;
    // this.gender = undefined;
    // this.sort = undefined;
    let link = Util.makeLinkProduc(undefined, undefined, undefined,undefined,undefined,text,undefined,undefined);
    this.router.navigateByUrl(link);
    console.log("Search neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",link);
  }
  category_click(text: string){
    this.router.navigateByUrl("/product?category="+text);
  }

  show() {
    this.showToggle = !this.showToggle;
    console.log("showToggle");
  }
  showSlide() {
    this.mobileToggle=!this.mobileToggle;
  }

  addOpen() {
    this.open = true;
  }

  closeOpen() {
    this.open = false;
  }

  showSlideToggle() {
    this.slideMobileToggle=!this.slideMobileToggle;
  }
  showSlideToggle1() {
    this.slideMobileToggle1=!this.slideMobileToggle1;
  }
  showSlideToggle2() {
    this.slideMobileToggle2=!this.slideMobileToggle2;
  }
  showSlideToggle3() {
    this.slideMobileToggle3=!this.slideMobileToggle3;
  }
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }
}
