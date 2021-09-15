import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
export class ProductCardSaleComponent implements OnInit {
 @Input() product: Product|undefined;
  @Input() productLove: Product|undefined;
 @Output() getProductQuickView: EventEmitter<Product> = new EventEmitter<Product>();
 showCart = true;
  showQuickView = false;
 changeImage = false;

  constructor(private cartService: CartService,private loveService: LoveService) {
    this.loveService.love$.subscribe(love => {
      this.productLove = love
    })
  }

  ngOnInit(): void {

  }
  handleAddToCart(){
    if(this.product != undefined){
      this.cartService.addCart(this.product,1);
      this.showCart= false;
      setTimeout(()=>this.showCart=true,1000);

    }
  }
  onClickProductQuickView(){
    console.log("co vao productcardsaleeeeeeeeee: ",this.product);
    if(this.product !=undefined)
    this.getProductQuickView.emit(this.product);
  }

  onClickLoveProduct(product: Product) {
    //Nhuan does here
    this.loveService.addLove(product);
  }
}
