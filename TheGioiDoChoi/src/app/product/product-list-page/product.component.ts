import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {timer} from "rxjs";
import {switchMap} from "rxjs/operators";
import {PaginationService} from "../../service/pagination/pagination.service";

declare const onloadFunction: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public age: string[]|undefined;
  public gender: string[]|undefined;
  public category: string | undefined;
  public startPrice: string | undefined;
  public endPrice: string | undefined;
  public search: string | undefined;
  public sort: string | undefined;
  public page: string|undefined;

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,

             ) {
    // this.activateRoute.queryParams.subscribe(param => {
    //   this.category = param.category;
    //   this.startPrice = param.startPrice;
    //   this.endPrice = param.endPrice;
    //   this.search = param.search;
    //   this.sort = param.sort;
    //   this.page = param.page;
    //   console.log('product.com param age: '+param.age);
    //   if (param.age != undefined) this.age =[].concat(param.age);
    //   if (param.gender != undefined) this.gender =[].concat(param.gender);

      timer(500).pipe(switchMap(_=>this.activateRoute.queryParams)).subscribe(params => {
        this.category = params.category;
        this.startPrice = params.startPrice;
        this.endPrice = params.endPrice;
        this.search = params.search;
        this.sort = params.sort;
        this.page = params.page;

        if (params.age != undefined) this.age =[].concat(params.age); else this.age = undefined;
        if (params.gender != undefined) this.gender =[].concat(params.gender); else this.gender = undefined;
        console.log('Ageeeeeeeeeeeeeeeee: ',this.age);
        console.log("Age pagram: ",params.age);
        this.productService.filter(params.category, params.startPrice, params.endPrice, params.age, params.gender, params.search, params.sort,params.page);
      });


    // if(this.initCheckAge !=undefined) this.productService.ageFilter.push(this.initCheckAge);
    // if(this.initCheckGender !=undefined) this.productService.genderFilter.push(this.initCheckGender);
    // this.productService.filter();
  }

  ngOnInit(): void {
    onloadFunction();
  }

}
