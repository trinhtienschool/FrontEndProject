import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product/product.service";
import {PaginationService} from "../../../service/pagination/pagination.service";
import {Pagination} from "../../../model/pagination";
import {Util} from "../../../model/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-toolbar',
  templateUrl: './shop-toolbar.component.html',
  styleUrls: ['./shop-toolbar.component.scss']
})
export class ShopToolbarComponent implements OnInit {
  public pagination: Pagination|undefined;

  @Input() age: string[] | undefined;
  @Input() gender: string[] | undefined;
  @Input() category: string | undefined;
  @Input() startPrice: string | undefined;
  @Input() endPrice: string | undefined;
  @Input() search: string | undefined;
  @Input() sort: string | undefined;


  constructor(private productService: ProductService, private router: Router,
              private paginationService: PaginationService) {
    paginationService.pagination$.subscribe(pagination =>{
      this.pagination = pagination;
    })
  }

  ngOnInit(): void {
    console.log("Co vao Shop-toolbar");
  }
  sortProduct(value: string){
    console.log("change: "+value);
    if(value =='asc'){
      this.sort = 'asc';
    }else if(value == 'desc') this.sort = 'desc';
    // this.page = '1';
    let link = Util.makeLinkProduc(this.category, this.startPrice, this.endPrice, this.age, this.gender, this.search, this.sort,undefined);
    this.router.navigateByUrl(link);
  }

}
