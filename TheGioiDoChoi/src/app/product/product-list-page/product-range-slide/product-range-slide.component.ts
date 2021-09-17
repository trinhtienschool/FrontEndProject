import {AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Util} from "../../../model/util";
import {ProductService} from "../../../service/product/product.service";
import {Router} from "@angular/router";
import {Options} from "@angular-slider/ngx-slider";
// declare const slider: any;

@Component({
  selector: 'app-product-range-slide',
  templateUrl: './product-range-slide.component.html',
  styleUrls: ['./product-range-slide.component.scss']
})
export class ProductRangeSlideComponent implements OnInit, OnChanges, AfterContentInit{

  @Input() age: string[] | undefined;
  @Input() gender: string[] | undefined;
  @Input() category: string | undefined;
  @Input() startPrice: string | undefined;
  @Input() endPrice: string | undefined;
  @Input() search: string | undefined;
  @Input() sort: string | undefined;
  value: number = 10000;
  highValue: number = 4000000;
  options: Options = {
    floor: 10000,
    ceil: 4000000
  };
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.startPrice != undefined && this.endPrice != undefined){
      this.value = parseInt(this.startPrice);
      this.highValue = parseInt(this.endPrice);
    }else{
      this.value = 10000;
      this.highValue = 4000000;
    }

  }

  ngAfterContentInit(): void {
    if(this.startPrice !=undefined && this.endPrice !=undefined){
     this.value = parseInt(this.startPrice);
     this.highValue = parseInt(this.endPrice);
    }

  }
  getValue(value: number, highValue: number) {
    // console.log("Value: "+value+" , highValue: "+highValue);
    // this.page = '1';
    let link = Util.makeLinkProduc(this.category, this.value+"", this.highValue+"", this.age, this.gender, this.search, this.sort,undefined);
    this.router.navigateByUrl(link);
  }
}
