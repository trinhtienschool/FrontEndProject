import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../model/product";
import {CartService} from "../../service/cart/cart.service";
import {fade} from "../animation";

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
  public imgZoom: string | undefined
  public quantity: number = 1
  public title: string = 'Thêm vào giỏ hàng'
  public title2: string = 'Thêm vào yêu thích'
  constructor( private cartService: CartService) { }

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
      this.title = 'Đã thêm vào giỏ hàng'
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.product !=undefined)
      this.imgZoom = this.product.images[0];
  }
}
