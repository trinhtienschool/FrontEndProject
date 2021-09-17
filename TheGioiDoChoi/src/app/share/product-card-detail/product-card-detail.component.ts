import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../model/product";
import {CartService} from "../../service/cart/cart.service";
import {fade} from "../animation";
import {LoveService} from "../../service/love/love.service";

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.scss'],
  animations: [
    fade
  ]
})

export class ProductCardDetailComponent implements OnInit, OnChanges {
  @Input() product: Product|undefined;
  public contain:boolean = false;
  public productlove: Product[]=[];
  public imgZoom: string | undefined
  public quantity: number = 1
  public myQuant: number = this.quantity
  public title: string = 'Thêm vào giỏ hàng'
  // public title2:string='Thêm vào yêu thích'
  constructor( private cartService: CartService,private loveService: LoveService) {
    this.loveService.love$.subscribe(love =>{this.productlove=love});
  }

  ngOnInit(): void {

   }

  selectImg(img: string) {
    this.imgZoom = img;
  }
  // todo nút giảm số lượng sản phẩm
  decreaseQuantity() {
    if(this.quantity>1)
      this.quantity--;
  }
  // todo nút tăng số lượng sản phẩm
  increaseQuantity() {
    this.quantity++;
  }
  handleAddToCart(){
    if(this.product != undefined){
      this.cartService.addCart(this.product, this.quantity);
      this.title = 'Đã thêm giỏ hàng'
      setTimeout(()=>this.title='Thêm vào giỏ hàng',1000);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.product !=undefined)
      this.imgZoom = this.product.images[0];
  }

  onClickLoveProduct(product: Product) {
    this.loveService.addLove(product);

  }

  // checkContainLove(product: Product) {
  //  this.loveService.checkContainItemLove(product);
  //  return this.loveService.contain;
  // }
  checkContainItemLove(product: Product){
    for(let i=0; i<this.productlove.length; i++){
      if(this.productlove[i].name === product.name){
        return true;
      }
    }
    return false;
  }

  // ngDoCheck(): void {
  //   console.log('da vaooooooooooooooooooooooooooooooooooooo')
  //   this.title2='Thêm vào yêu thích';
  //   let productLove=this.loveService.love;
  //   if(this.product!=undefined){
  //     for(let i=0;i<productLove.length;i++){
  //       if(this.product.product_id==productLove[i].product_id){
  //         this.title2='Đã thêm yêu thích';
  //       }
  //     }
  //   }
  // }
}
