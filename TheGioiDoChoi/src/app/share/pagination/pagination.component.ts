import { Component, OnInit } from '@angular/core';
import {PaginationService} from "../../service/pagination/pagination.service";
import {Pagination} from "../../model/pagination";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public numbers : number[]=[];
  public _pagination: Pagination|undefined;
  public isDisablePrevious: boolean = true ;
  public isDisableNext: boolean = true ;
  constructor(private paginationService: PaginationService) {
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
  }

  ngOnInit(): void {
  }

  changePage(i: number) {
    this.paginationService.setCurrent(i);
  }
  changePrevious(){
    if(this._pagination !==undefined) this.paginationService.setCurrent(this._pagination.current -1);
  }
  changeNext(){
    if(this._pagination !==undefined) this.paginationService.setCurrent(this._pagination.current +1);
  }

}
