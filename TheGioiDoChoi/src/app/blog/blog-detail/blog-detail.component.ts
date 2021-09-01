import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../model/blog";
import {ActivatedRoute, Router} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {BlogService} from "../../service/blog/blog.service";
// declare const onloadFunction: any;
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  public blog: Blog|undefined;

  constructor(private activateRoute: ActivatedRoute,
              private blogService: BlogService,
              private router: Router,) { }

  ngOnInit(): void {

    this.activateRoute.paramMap.pipe(
      map(param=> param.get('id')),
      switchMap(id =>this.blogService.findBlogById(id))
    ).subscribe(blog=>this.blog = blog);
    setTimeout(()=>{
      console.log(this.blog);
      if(this.blog == undefined)
        this.router.navigateByUrl('/**');
    },1000);
  }


}

