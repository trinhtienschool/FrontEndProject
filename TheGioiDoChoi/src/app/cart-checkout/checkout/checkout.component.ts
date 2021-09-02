import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../model/cart-item";
import {CartService} from "../../service/cart/cart.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare const onloadFunction: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public cartItem: CartItem[]=[]
  checkoutForm: FormGroup = new FormGroup({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'address': new FormControl('', Validators.required)}
  )

  constructor(private service:CartService) {
    this.service.cart$.subscribe(cart=>{this.cartItem=cart})
  }
  public  totalPriceOfAllProduct(){
    let sum =0
    for(let c of this.cartItem){
      sum+=c.totalPrice();
    }
    return sum;
  }
  public numberOfListProduct(){
    let number=0;
    for(let c of this.cartItem){
      number+=1;
    }
    return number;
  }
  public deleteAcartItem(){

  }
  ngOnInit(): void {
    onloadFunction();
  }

  get firstname(){return this.checkoutForm.get('firstname')}
  get lastname(){return this.checkoutForm.get('lastname')}
  get phone(){return this.checkoutForm.get('phone')}
  get email(){return this.checkoutForm.get('email')}
  get address(){return this.checkoutForm.get('address')}

  get f(){return this.checkoutForm.controls}

  public resetCart() {
    this.service.resetCart()
  }
}
