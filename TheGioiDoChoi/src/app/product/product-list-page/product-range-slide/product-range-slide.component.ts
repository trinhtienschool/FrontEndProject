import {AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Util} from "../../../model/util";
import {ProductService} from "../../../service/product/product.service";
import {Router} from "@angular/router";
declare const slider: any;

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
  @Input() page: string|undefined;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }
  click(from: string, to: string){
    console.log("Có click");
    console.log("Nhan: "+from+" : "+to);
    console.log(Util.convertCurrencyToNumber(from));
    console.log(Util.convertCurrencyToNumber(to));
    // this.productService.filterByPrice(Util.convertCurrencyToNumber(from),Util.convertCurrencyToNumber(to));
    this.startPrice = Util.convertCurrencyToNumber(from);
    this.endPrice = Util.convertCurrencyToNumber(to);

    let link = Util.makeLinkProduc(this.category, this.startPrice, this.endPrice, this.age, this.gender, this.search, this.sort,this.page);
    this.router.navigateByUrl(link);
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(()=>{
    if(this.startPrice !=undefined && this.endPrice !=undefined) slider(10000,4000000,[this.startPrice,this.endPrice]);
    else slider(10000,4000000,[10000,4000000]);
    },1000);
  }

  ngAfterContentInit(): void {
    setTimeout(()=>{
      if(this.startPrice !=undefined && this.endPrice !=undefined) slider(10000,4000000,[this.startPrice,this.endPrice]);
      else slider(10000,4000000,[10000,4000000]);
    },1000);
  }
}
