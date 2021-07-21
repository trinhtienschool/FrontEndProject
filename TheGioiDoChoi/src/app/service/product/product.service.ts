import {Injectable} from '@angular/core';
import {LoadJsonService} from "../load-json/load-json.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Pagination} from "../../model/pagination";
import {Product} from "../../model/product";
import {Util} from "../../model/util";
import {PaginationService} from "../pagination/pagination.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public priceStartFilter: number = 10000;
  public priceEndFilter: number = 4000000;
  public ageFilter: string[] = [];
  public genderFilter: string[]=[];
  public sortType: string = '';
  public allProductsArr: Product[] = [];
  public currentProducts: Product[] = [];
  public lego: Product[] = [];
  public puzzle: Product[] = [];
  public smartgame: Product[] = [];
  public bupbe: Product[] = [];
  public robot: Product[] = [];
  public maybaytenlua: Product[] = [];
  public mohinhxe: Product[] = [];
  public xedieukhien: Product[] = [];
  public dochoidangoai: Product[] = [];
  public dochoiduoinuoc: Product[] = [];
  public dodungnhabep: Product[] = [];
  public xe: Product[] = [];
  private behaviorSubject: BehaviorSubject<any> = new BehaviorSubject('');
  public pagination$: Observable<any> = this.behaviorSubject.asObservable();

  constructor(private httpData: LoadJsonService,
              private paginationService: PaginationService) {
    httpData.getData("search.json").subscribe(value => {
      // Util.convertObj2ProArr(value.lego,this.lego);
      // Util.convertObj2ProArr(value.puzzle,this.puzzle);
      // Util.convertObj2ProArr(value.smartgame,this.smartgame);
      // Util.convertObj2ProArr(value.bupbe,this.bupbe);
      // Util.convertObj2ProArr(value.robot,this.robot);
      // Util.convertObj2ProArr(value.maybaytenlua,this.maybaytenlua);
      // Util.convertObj2ProArr(value.mohinhxe,this.mohinhxe);
      // Util.convertObj2ProArr(value.xedieukhien,this.xedieukhien);
      // Util.convertObj2ProArr(value.dochoidangoai,this.dochoidangoai);
      // Util.convertObj2ProArr(value.dochoiduoinuoc,this.dochoiduoinuoc);
      // Util.convertObj2ProArr(value.dodungnhabep,this.dodungnhabep);
      // if(this.lego !==undefined) this.allProductsArr?.push(this.lego);
      // if(this.puzzle !==undefined) this.allProductsArr?.push(this.puzzle);
      // if(this.smartgame !==undefined) this.allProductsArr?.push(this.smartgame);
      // if(this.bupbe !==undefined) this.allProductsArr?.push(this.bupbe);
      // if(this.robot !==undefined) this.allProductsArr?.push(this.robot);
      // if(this.maybaytenlua !==undefined) this.allProductsArr?.push(this.maybaytenlua);
      // if(this.mohinhxe !==undefined) this.allProductsArr?.push(this.mohinhxe);
      // if(this.xedieukhien !==undefined) this.allProductsArr?.push(this.xedieukhien);
      // if(this.dochoidangoai !==undefined) this.allProductsArr?.push(this.dochoidangoai);
      // if(this.dochoiduoinuoc !==undefined) this.allProductsArr?.push(this.dochoiduoinuoc);
      // if(this.dodungnhabep !==undefined) this.allProductsArr?.push(this.dodungnhabep);
      this.setData(value.lego, this.lego);
      this.setData(value.puzzle, this.puzzle);
      this.setData(value.smartgame, this.smartgame);
      this.setData(value.bupbe, this.bupbe);
      this.setData(value.robot, this.robot);
      this.setData(value.maybaytenlua, this.maybaytenlua);
      this.setData(value.mohinhxe, this.mohinhxe);
      this.setData(value.xedieukhien, this.xedieukhien);
      this.setData(value.dochoidangoai, this.dochoidangoai);
      this.setData(value.dochoiduoinuoc, this.dochoiduoinuoc);
      this.setData(value.dodungnhabep, this.dodungnhabep);
      this.setData(value.xe, this.xe);
      // console.log("length: "+this.allProductsArr.length);

      this.notify(this.allProductsArr);
    })
  }

  private setData(obj: Object, arr: Product[]) {
    Util.convertObj2ProArr(obj, arr);
    if (arr !== undefined) {
      this.allProductsArr.push.apply(this.allProductsArr, arr);
    }

  }

  search(searchTxt: string) {
    this.currentProducts = [];
    for (let p of this.allProductsArr) {
      if (p.search(searchTxt)) this.currentProducts.push(p);
    }
    this.notify(this.currentProducts);
  }

  filterCategory(category: string) {
    this.currentProducts = [];
    switch (category) {
      case 'lego':
        this.currentProducts = this.lego;
        break;
      case 'puzzle':
        this.currentProducts = this.puzzle;
        break;
      case 'smartgame':
        this.currentProducts = this.smartgame;
        break;
      case 'bupbe':
        this.currentProducts = this.bupbe;
        break;
      case 'robot':
        this.currentProducts = this.robot;
        break;
      case 'maybaytenlua':
        this.currentProducts = this.maybaytenlua;
        break;
      case 'mohinhxe':
        this.currentProducts = this.mohinhxe;
        break;
      case 'xedieukhien':
        this.currentProducts = this.xedieukhien;
        break;
      case 'dochoidangoai':
        this.currentProducts = this.dochoidangoai;
        break;
      case 'dochoiduoinuoc':
        this.currentProducts = this.dochoiduoinuoc;
        break;
      case 'dodungnhabep':
        this.currentProducts = this.dodungnhabep;
        break;
      case 'xe':
        this.currentProducts = this.xe;
        break;
      default:
        this.currentProducts = [];
        break;
    }
    this.filter();
    // this.notify(this.currentProducts);
  }

  filter(){
    console.log("ageFilter: "+this.ageFilter);
    console.log("genderFilter: "+this.genderFilter);
    console.log("priceStart: "+this.priceStartFilter);
    console.log("priceEnd: "+this.priceEndFilter);
    if (this.currentProducts.length != 0) {
     this.filterArr(this.currentProducts);
    } else if (this.allProductsArr.length != 0) {
      this.filterArr(this.allProductsArr);
    }
  }
  filterArr(arr: Product[]){
    let products : Product[] = [];
    for (let p of arr) {
      if (p.filter(this.priceStartFilter, this.priceEndFilter, this.ageFilter, this.genderFilter)) products.push(p);
    }
    if(this.sortType == 'increase') this.sortArrIncrease(products);
    else if(this.sortType == 'decrease') this.sortArrDecrease(products);
    this.notify(products);

  }
   notify(arr: Product[]){
     this.paginationService.setUpPagination(arr.length,9);
     this.behaviorSubject.next(arr);
   }
  // filterByPrice(startPrice: number, endPrice: number) {
  //   let products: Product[] = [];
  //   if (this.currentProducts.length != 0) {
  //     for (let p of this.currentProducts) {
  //       if (p.filterPrice(startPrice, endPrice)) products.push(p);
  //     }
  //   } else if (this.allProductsArr.length != 0) {
  //     for (let p of this.allProductsArr) {
  //       if (p.filterPrice(startPrice, endPrice)) products.push(p);
  //     }
  //   }
  //   this.paginationService.setSumOfItems(products.length);
  //   this.behaviorSubject.next(products);
  // }
  //
  // filterByAge_Gender(para: string, type: string) {
  //   let products: Product[] = [];
  //   if (this.currentProducts.length != 0) {
  //     for (let p of this.currentProducts) {
  //       if (p.filterAge_Gender(para, type)) products.push(p);
  //     }
  //   } else if (this.allProductsArr.length != 0) {
  //     for (let p of this.allProductsArr) {
  //       if (p.filterAge_Gender(para, type)) products.push(p);
  //     }
  //   }
  //   this.paginationService.setSumOfItems(products.length);
  //   this.behaviorSubject.next(products);
  // }
  // sortIncrease(){
  //   if (this.currentProducts.length != 0) {
  //     this.sortArrIncrease(this.currentProducts);
  //   } else if (this.allProductsArr.length != 0) {
  //    this.sortArrIncrease(this.allProductsArr);
  //   }
  // }
  private sortArrIncrease(arr:Product[]){
    arr.sort(function(a,b){
      let a_price = (a.price_sale>0 && a.price>a.price_sale)?a.price_sale:a.price;
      let b_price = (b.price_sale>0 && b.price>b.price_sale)?b.price_sale:b.price;
      return a_price-b_price;
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
      let a_price = (a.price_sale>0 && a.price>a.price_sale)?a.price_sale:a.price;
      let b_price = (b.price_sale>0 && b.price>b.price_sale)?b.price_sale:b.price;
      return a_price-b_price;
    })
  }

}
