import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Categories} from "../../../model/categories";
import {ProductService} from "../../../service/product/product.service";
import {map, switchMap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {Util} from "../../../model/util";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnChanges {

  @Input() age: string[] | undefined;
  @Input() gender: string[] | undefined;
  @Input() category: string | undefined;
  @Input() startPrice: string | undefined;
  @Input() endPrice: string | undefined;
  @Input() search: string | undefined;
  @Input() sort: string | undefined;
  @Input() page: string | undefined;

  dc_vandong: boolean = false;
  dc_tritue: boolean = false;
  dc_ptgt: boolean = false;
  dc_nv: boolean = false;

  public categories = new Categories();

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.category !=undefined){
      this.dc_vandong = this.checkItsParent(this.categories.dc_vandong);
      this.dc_tritue = this.checkItsParent(this.categories.dc_tritue);
      this.dc_ptgt = this.checkItsParent(this.categories.dc_ptgt);
      this.dc_nv = this.checkItsParent(this.categories.dc_nv);
    }else {
      this.dc_vandong = false;
      this.dc_tritue=false;
      this.dc_ptgt=false;
      this.dc_nv = false;
    }
    console.log('vd: ',this.dc_vandong);
    console.log("tt: ",this.dc_tritue);
    console.log('ptgt: ',this.dc_ptgt);
    console.log('nv: ',this.dc_nv);
    }

  ngOnInit(): void {

  }
  checkItsParent(arr: string[][]):boolean{
    for(let i=0;i<arr.length;i++){
      if(arr[i][1]==this.category) return true;
    }
    return false;
  }
  filterByCategory(category: string){
    console.log(category);
  this.category = category;
    let link = Util.makeLinkProduc(this.category, this.startPrice, this.endPrice, this.age, this.gender, this.search, this.sort,this.page);
    this.router.navigateByUrl(link);

  }
}
