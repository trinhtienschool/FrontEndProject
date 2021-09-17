import {Injectable} from '@angular/core';
import {LoadJsonService} from "../load-json/load-json.service";
import {BehaviorSubject, Observable, of, throwError, timer} from "rxjs";
import {Pagination} from "../../model/pagination";
import {Product} from "../../model/product";
import {Util} from "../../model/util";
import {PaginationService} from "../pagination/pagination.service";
import {delay, find, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // public priceStartFilter: number = 10000;
  // public priceEndFilter: number = 4000000;
  // public ageFilter: string[] = [];
  // public genderFilter: string[]=[];
  // public sortType: string = '';
  public allProductsArr: Product[] = [];
  // public currentProducts: Product[] = [];
  // public lego: Product[] = [];
  // public puzzle: Product[] = [];
  // public smartgame: Product[] = [];
  // public bupbe: Product[] = [];
  // public robot: Product[] = [];
  // public maybaytenlua: Product[] = [];
  // public mohinhxe: Product[] = [];
  // public xedieukhien: Product[] = [];
  // public dochoidangoai: Product[] = [];
  // public dochoiduoinuoc: Product[] = [];
  // public dodungnhabep: Product[] = [];
  // public xe: Product[] = [];
  private behaviorSubject: BehaviorSubject<any> = new BehaviorSubject('');
  public products$: Observable<any> = this.behaviorSubject.asObservable();
  public behaviorProductId: BehaviorSubject<any> = new BehaviorSubject<any>('');
  constructor(private httpData: LoadJsonService,
              private paginationService: PaginationService) {
    httpData.getData("search2.json").subscribe(value => {
      Util.convertObj2ProArr(value.lego, this.allProductsArr, 'lego');
      Util.convertObj2ProArr(value.puzzle, this.allProductsArr, 'puzzle');
      Util.convertObj2ProArr(value.smartgame, this.allProductsArr, 'smartgame');
      Util.convertObj2ProArr(value.bupbe, this.allProductsArr,'bupbe');
      Util.convertObj2ProArr(value.robot, this.allProductsArr,'robot');
      Util.convertObj2ProArr(value.maybaytenlua, this.allProductsArr,'maybaytenlua');
      Util.convertObj2ProArr(value.mohinhxe, this.allProductsArr,'mohinhxe');
      Util.convertObj2ProArr(value.xedieukhien, this.allProductsArr,'xedieukhien');
      Util.convertObj2ProArr(value.dochoidangoai, this.allProductsArr,'dochoidangoai');
      Util.convertObj2ProArr(value.dochoiduoinuoc, this.allProductsArr,'dochoiduoinuoc');
      Util.convertObj2ProArr(value.dodungnhabep, this.allProductsArr,'dodungnhabep');
      Util.convertObj2ProArr(value.xe, this.allProductsArr,'xe');

      // this.notify(1,this.allProductsArr);
    })
  }

  // search(searchTxt: string) {
  //   this.currentProducts = [];
  //   for (let p of this.allProductsArr) {
  //     if (p.search(searchTxt)) this.currentProducts.push(p);
  //   }
  //   this.notify(this.currentProducts);
  // }
  //
  // filterCategory(category: string) {
  //   this.currentProducts = [];
  //   switch (category) {
  //     case 'lego':
  //       this.currentProducts = this.lego;
  //       break;
  //     case 'puzzle':
  //       this.currentProducts = this.puzzle;
  //       break;
  //     case 'smartgame':
  //       this.currentProducts = this.smartgame;
  //       break;
  //     case 'bupbe':
  //       this.currentProducts = this.bupbe;
  //       break;
  //     case 'robot':
  //       this.currentProducts = this.robot;
  //       break;
  //     case 'maybaytenlua':
  //       this.currentProducts = this.maybaytenlua;
  //       break;
  //     case 'mohinhxe':
  //       this.currentProducts = this.mohinhxe;
  //       break;
  //     case 'xedieukhien':
  //       this.currentProducts = this.xedieukhien;
  //       break;
  //     case 'dochoidangoai':
  //       this.currentProducts = this.dochoidangoai;
  //       break;
  //     case 'dochoiduoinuoc':
  //       this.currentProducts = this.dochoiduoinuoc;
  //       break;
  //     case 'dodungnhabep':
  //       this.currentProducts = this.dodungnhabep;
  //       break;
  //     case 'xe':
  //       this.currentProducts = this.xe;
  //       break;
  //     default:
  //       this.currentProducts = [];
  //       break;
  //   }
  //   this.filter();
  //   // this.notify(this.currentProducts);
  // }

  // addCart(product: Product){
  //   this.products.push(product);
  //   this.behaviorSubject.next(this.products);
  // }
  filter(category: string|undefined,startPrice: number|undefined,endPrice: number|undefined, age: string|string[]|undefined,gender: string|string[]|undefined, search:string|undefined, sort:string|undefined,currentPage: number|undefined){
    let products : Product[] = [];
    for (let p of this.allProductsArr) {
      if (p.filter(category,startPrice,endPrice,age,gender,search)) products.push(p);
    }
    if(sort !=undefined)
      if(sort == 'asc') this.sortArrIncrease(products);
      else if(sort == 'desc') this.sortArrDecrease(products);

    if(currentPage !=undefined) this.notify(currentPage,products);
    else this.notify(1,products);
  }
  getRandomProduct():Product[]{
    let randomProducts: Product[]=[];
    let i = 0;
    if(this.allProductsArr !=undefined){
      while(i<4){
        let randomIndex = Math.random() * (this.allProductsArr.length-1) + 1;
        randomProducts.push(this.allProductsArr[randomIndex]);
        i++;
      }
      return randomProducts;
    }
    return [];
  }
  // filterArr(arr: Product[]){
  //   let products : Product[] = [];
  //   for (let p of arr) {
  //     if (p.filter(this.priceStartFilter, this.priceEndFilter, this.ageFilter, this.genderFilter)) products.push(p);
  //   }
  //   if(this.sortType == 'increase') this.sortArrIncrease(products);
  //   else if(this.sortType == 'decrease') this.sortArrDecrease(products);
  //   this.notify(products);
  //
  // }
   notify(currentPage: number,arr: Product[]){
     this.paginationService.setUpPagination(currentPage,arr.length,9);
     this.behaviorSubject.next(arr);
   }
  private sortArrIncrease(arr:Product[]){
    arr.sort(function(a,b){
      return a.priceCalculate-b.priceCalculate;
    })
  }
  // sortDecrease(){
  //   if (this.currentProducts.length != 0) {
  //     this.sortArrDecrease(this.currentProducts);
  //   } else if (this.allProductsArr.length != 0) {
  //     this.sortArrDecrease(this.allProductsArr);
  //   }
  // }
  private sortArrDecrease(arr:Product[]){
    arr.sort(function(b,a){
      return a.priceCalculate-b.priceCalculate;
    })
  }
  private findProduct(id: string|null): Product{
    const product = this.allProductsArr.find(p=>p.product_id == id);
    return <Product>product;
  }
  public findProductById(id: string|null):Observable<Product>{
    return timer(500).pipe(switchMap(_=>of(this.findProduct(id))));
  }
  // }
  // findProductByIdWait(){
  //
  // }

}
