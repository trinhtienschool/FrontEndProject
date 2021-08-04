import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {query} from "@angular/animations";
import {Categories} from "../model/categories";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public category: string|undefined;
  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(params=>this.category = params.category);
    console.log('category: ',this.category);
  }

  ngOnInit(): void {
  }

}
