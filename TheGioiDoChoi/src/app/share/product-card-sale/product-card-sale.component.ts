import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";
import {CartService} from "../../service/cart/cart.service";
import {fade} from "../animation";
import {LoveService} from "../../service/love/love.service";

// declare const clickAddCart: any;
@Component({
  selector: 'app-product-card-sale',
  templateUrl: './product-card-sale.component.html',
  styleUrls: ['./product-card-sale.component.scss'],
  animations: [
    fade
  ]
})
export class ProductCardSaleComponent implements OnInit, AfterViewInit {

 @Input() product: Product|undefined;
 @Output() getProductQuickView: EventEmitter<Product> = new EventEmitter<Product>();
 showCart = true;

  showQuickView = false;
  changeImage = false;
  isLove = false;


  constructor(private cartService: CartService, private loveService: LoveService) {

  }

  ngAfterViewInit(): void {
    this.loveService.love$.subscribe(love => {
      console.log("Co vao subscribe.......: ",this.product?.product_id);
      let productLoves = love;
      if (this.product != undefined) {
        if(productLoves.length==0) this.isLove = false;
        for (let i = 0; i < productLoves.length; i++) {
          if (this.product.product_id == productLoves[i].product_id) {
            // console.log("Co vaoooooooooooo: ",this.product.product_id);
            this.isLove = true;
          }
        }
      }
    })
    }



  ngOnInit(): void {
    // let productLoves = this.loveService.love;
    // if (this.product != undefined) {
    //   for (let i = 0; i < productLoves.length; i++) {
    //     if (this.product.product_id == productLoves[i].product_id) {
    //       this.isLove = true;
    //     }
    //   }
    // }
  }


  handleAddToCart() {
    if (this.product != undefined) {
      this.cartService.addCart(this.product, 1);
      this.showCart = false;
      setTimeout(() => this.showCart = true, 1000);

    }
  }

  onClickProductQuickView() {
    console.log("co vao productcardsaleeeeeeeeee: ", this.product);
    if (this.product != undefined)
      this.getProductQuickView.emit(this.product);
  }

  onClickLoveProduct(product: Product) {
    //Nhuan does here
    this.loveService.addLove(product);
    this.isLove = true;
    console.log('love', product);
  }

  onClickUnLoveProduct(product: Product) {
    this.loveService.deleteItemLove(product);
    this.isLove = false;

  }
}
