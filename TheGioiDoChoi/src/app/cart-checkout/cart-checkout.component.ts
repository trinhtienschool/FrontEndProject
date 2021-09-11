import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {animationRoute} from "../share/animation";

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss'],
  animations:[
    animationRoute
  ]
})
export class CartCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prepareRoute(myOutlet: RouterOutlet) {
    return myOutlet && myOutlet.activatedRouteData &&
      myOutlet.activatedRouteData['animation'];
  }
}
