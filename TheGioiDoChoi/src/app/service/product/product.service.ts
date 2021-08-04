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
  public products$: Observable<any> = this.behaviorSubject.asObservable();
  public behaviorProductId: BehaviorSubject<any> = new BehaviorSubject<any>('');
  // Thy begin
  products: Product[] = [
    new Product("Bộ câu cá dã ngoại",449000, 449000,"BATTAT","4","mô tả","2", "2",
      ['https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/b/t/bt2540z_1.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/b/t/bt2540z.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/b/t/bt2540z_2.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/b/t/bt2540z_3.jpg']),
    new Product("Chuyến dã ngoại mùa hè", 1599000, 449000, "LEGO FRIENDS", "26", "mô tả","1", "3",
      ['https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/4/1/41681_1_.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/4/1/41681_7_.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/4/1/41681_2_.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/4/1/41681_3_.jpg']
    )
  ]
  // Thy end
  constructor(private httpData: LoadJsonService,
              private paginationService: PaginationService) {
    httpData.getData("search2.json").subscribe(value => {
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

  // addCart(product: Product){
  //   this.products.push(product);
  //   this.behaviorSubject.next(this.products);
  // }
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
  findProduct(id: string|null): Product{
    const product = this.allProductsArr.find(p=>p.product_id == id);
    return <Product>product;
  }
  findProductById(id: string|null):Observable<Product>{
    return timer(500).pipe(switchMap(_=>of(this.findProduct(id))));
  }

  // Thy
  getProducts(): Product[]{
    return this.products;
  }
}
