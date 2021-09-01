import {Component, Input, OnInit} from '@angular/core';
import {PaginationService} from "../../service/pagination/pagination.service";
import {Pagination} from "../../model/pagination";
import {Util} from "../../model/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() age: string[] | undefined;
  @Input() gender: string[] | undefined;
  @Input() category: string | undefined;
  @Input() startPrice: string | undefined;
  @Input() endPrice: string | undefined;
  @Input() search: string | undefined;
  @Input() sort: string | undefined;
  @Input() page: string|undefined;
  @Input() type: string|undefined;

  public numbers : number[]=[];
  public _pagination: Pagination|undefined;
  public isDisablePrevious: boolean = true ;
  public isDisableNext: boolean = true ;
  constructor(private paginationService: PaginationService, private router: Router) {
    this.paginationService.pagination$.subscribe(pagination=>{

      this._pagination = pagination;
      // console.log("current: "+this._pagination.current);
      // console.log("numofpage: "+this._pagination.numOfPage());
      // console.log("current: "+this._pagination.current);
      // console.log("sumOfItems: "+this._pagination.sumOfItems);
      if(this._pagination.current <= 1) this.isDisablePrevious = true
      else this.isDisablePrevious = false;
      if(this._pagination.current >=this._pagination.numOfPage())  this.isDisableNext = true;
      else this.isDisableNext = false;
      // console.log("displayNext: "+this.isDisableNext+" "+pagination.numOfPage()+" "+this._pagination.current);
      let arr : number[] = [];
      if(pagination.numOfPage()<=6){
        for(let i=1;i<=pagination.numOfPage();i++){
          arr.push(i);
        }
        this.numbers = arr;
      }else {
        while(true){
          if(arr.length>4){
            break;
          }else{
            if(arr.length == 0){
              arr.push(pagination.current);
            }else{
              let max = Math.max.apply(Math,arr);
              let min = Math.min.apply(Math,arr);
              if(max+1<=pagination.numOfPage()) arr.push(max+1);
              if(min-1>=1) arr.push(min-1);
              // console.log("Max: "+(max+1));
              // console.log("min:"+ (min-1));
            }
          }
        }
        arr.sort(function(a, b){return a - b});
        this.numbers = arr;
        // console.log("number: "+this.numbers);
      }
      // console.log("number"+this.numbers);
    })
    // if(this.page != undefined) this.changePage(parseInt(this.page));
  }

  ngOnInit(): void {
  }

  changePage(i: number) {
    // this.paginationService.setCurrent(i);
    this.page = i+"";
   this.navigate()
  }
  changePrevious(){
    // if(this._pagination !==undefined) this.paginationService.setCurrent(this._pagination.current -1);
    if(this._pagination != undefined) this.page = (this._pagination.current -1)+"";
    else this.page = '1';
    this.navigate();
  }
  changeNext(){
    if(this._pagination !==undefined) this.page = (this._pagination.current +1)+"";
    else this.page = '1';
    this.navigate();
  }
  navigate(){
    if(this.type !=undefined && this.type=='product') {
      let link = Util.makeLinkProduc(this.category, this.startPrice, this.endPrice, this.age, this.gender, this.search, this.sort, this.page);
      console.log('Linkkkk', link);
      this.router.navigateByUrl(link);
    }else if(this.type !=undefined && this.type == 'blog'){
      let link = '/blog?';
      if(this.page !=undefined) link +='page='+this.page;
      this.router.navigateByUrl(link);
    }
  }

}
