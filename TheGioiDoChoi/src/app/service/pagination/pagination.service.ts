import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Pagination} from "../../model/pagination";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private _pagination: Pagination = new Pagination(1,9,0);
  private behaviorSubject: BehaviorSubject<Pagination> = new BehaviorSubject(this._pagination);
  public pagination$: Observable<Pagination> = this.behaviorSubject.asObservable();
  constructor() { }

  setCurrent(current: number){
    this._pagination.current = current;
    console.log(this._pagination.current);
    this.behaviorSubject.next(this._pagination);
  }
 setSumOfItems(sum: number){
    this._pagination.current = 1;
    this._pagination.sumOfItems = sum;
    this.behaviorSubject.next(this._pagination);
 }
  get pagination(): Pagination {
    return this._pagination;
  }

}
