import { Injectable } from '@angular/core';
import {Blog} from "../../model/blog";
import {Util} from "../../model/util";
import {LoadJsonService} from "../load-json/load-json.service";
import {PaginationService} from "../pagination/pagination.service";
import {BehaviorSubject, Observable, of, timer} from "rxjs";
import {Product} from "../../model/product";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blogs: Blog[] = [];
  private behaviorSubject: BehaviorSubject<any> = new BehaviorSubject('');
  public blog$: Observable<any> = this.behaviorSubject.asObservable();
  constructor(private httpData: LoadJsonService,private paginationService: PaginationService) {
    this.httpData.getData("blog.json").subscribe(value => {
      // const blogArrObj = value.blog;
      // if(blogArrObj !=undefined) {
        Util.convertObj2BlogArr(value.blog, this.blogs);
        console.log(this.blogs);
        // this.paginationService.setUpPagination(1, this.blogs.length, 12);
      // }
    })

  }
  public getAllBlogs(currentPage: string|undefined){
    if(currentPage !=undefined)this.notify(parseInt(currentPage));
    else this.notify(1);
  }
  notify(currentPage: number){
    this.paginationService.setUpPagination(currentPage,this.blogs.length,12);
    this.behaviorSubject.next(this.blogs);
  }
  private findBlog(id: string|null): Blog{
    const blog = this.blogs.find(b=>b.id == id);
    return <Blog>blog;
  }
  public findBlogById(id: string|null):Observable<Blog>{
    return timer(500).pipe(switchMap(_=>of(this.findBlog(id))));
  }
}
