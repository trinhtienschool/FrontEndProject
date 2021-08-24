import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {map, switchMap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product/product.service";
import {CartService} from "../../../service/cart/cart.service";
import {CartItem} from "../../../model/cart-item";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public product: Product | undefined
  public imgZoom: string | undefined
  public quantity: number = 1
  constructor(private activateRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      map(param=> param.get('id')),
      switchMap(id =>this.productService.findProductById(id))
    ).subscribe(product=>{
      this.product = product
      this.imgZoom = product.images[0]});
    setTimeout(()=>{
      console.log(this.product);
      if(this.product == undefined)
        this.router.navigateByUrl('/**');
    },1000);

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
    }
  }
}
