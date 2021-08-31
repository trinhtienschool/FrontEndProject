import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product/product.service";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  public product: Product | undefined
  constructor(private activateRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router,) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      map(param=> param.get('id')),
      switchMap(id =>this.productService.findProductById(id))
    ).subscribe(product=>this.product = product);
    setTimeout(()=>{
      console.log(this.product);
      if(this.product == undefined)
        this.router.navigateByUrl('/**');
    },1000);
  }

}
