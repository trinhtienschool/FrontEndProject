import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {query} from "@angular/animations";
import {Categories} from "../model/categories";
import {animationRoute} from "../share/animation";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  animations:[
    animationRoute
  ]
})
export class ProductPageComponent implements OnInit {
  public category: string|undefined;
  constructor() {
  }

  ngOnInit(): void {
  }
  prepareRoute(myOutlet: RouterOutlet) {
    return myOutlet && myOutlet.activatedRouteData &&
      myOutlet.activatedRouteData['animation'];
  }
}
