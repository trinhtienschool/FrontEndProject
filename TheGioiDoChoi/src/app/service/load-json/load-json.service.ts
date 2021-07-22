import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoadJsonService {
  private baseUrl = "http://localhost:4200/assets/data/";
  constructor(
    private http: HttpClient
  ) { }

  getData(url: string,header: object={}):Observable<any>{
    url = this.baseUrl+url;
    return this.http.get(url,header).pipe(
      tap(receive => receive),
      catchError(error => of([null]))
    )
  }

}
