import { Component, OnInit } from '@angular/core';
import {Categories} from "../../../model/categories";
import {ProductService} from "../../../service/product/product.service";
import {map, switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Categories|undefined;
  public choosing: string='';
  public category_show: string = '';
  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute) {
    this.categories = new Categories();
    this.activateRoute.queryParams.subscribe(param=>console.log('categories component: ',param.category));


  }

  ngOnInit(): void {
  }
  filterByCategory(category: string, category_parent: string){
    console.log(category);
    this.category_show = category_parent;
    this.choosing=category;
    this.productService.filterCategory(category);
  }
}
