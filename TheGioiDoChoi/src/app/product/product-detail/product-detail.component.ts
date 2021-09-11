import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product/product.service";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product|undefined;

  constructor(private activateRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router,) { }

  ngOnInit(): void {

    this.activateRoute.paramMap.pipe(
      map(param=> param.get('id')),
      switchMap(id =>this.productService.findProductById(id))
    ).subscribe(product=>{
      this.product = product;


      // console.log("Sizeeeee: ",size);
      console.log("Product Imageeeee: ",product.images)
    });
    setTimeout(()=>{
    console.log(this.product);
      if(this.product == undefined)
        this.router.navigateByUrl('/**');
    },1000);
    // let id = this.activateRoute.paramMap.pipe(map(param=>param.get('id')));
    // console.log("id:")
    // console.log(id);

    // console.log(this.product);
  }

}
