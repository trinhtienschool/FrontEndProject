import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute} from "@angular/router";
declare const onloadFunction: any
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute) {

    // if(this.initCheckAge !=undefined) this.productService.ageFilter.push(this.initCheckAge);
    // if(this.initCheckGender !=undefined) this.productService.genderFilter.push(this.initCheckGender);
    // this.productService.filter();
  }

  ngOnInit(): void {
    onloadFunction();
  }

}
