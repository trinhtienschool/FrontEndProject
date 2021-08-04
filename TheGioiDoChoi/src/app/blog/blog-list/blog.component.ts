import { Component, OnInit } from '@angular/core';
import {Blog} from "../../model/blog";
import {LoadJsonService} from "../../service/load-json/load-json.service";
import {isArray} from "rxjs/internal-compatibility";
import {Util} from "../../model/util";
import {PaginationService} from "../../service/pagination/pagination.service";
import {Pagination} from "../../model/pagination";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs: Blog[] = [];
  public pagination : Pagination|undefined;
  // = [
  //   {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
  //     date: "22/2/2020",
  //     author:"Trịnh Quang Tiến",
  //     content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
  //   {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
  //     date: "22/2/2020",
  //     author:"Trịnh Quang Tiến",
  //     content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
  //   {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
  //     date: "22/2/2020",
  //     author:"Trịnh Quang Tiến",
  //     content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
  //   {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
  //     date: "22/2/2020",
  //     author:"Trịnh Quang Tiến",
  //     content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
  //   {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
  //     date: "22/2/2020",
  //     author:"Trịnh Quang Tiến",
  //     content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
  //   {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
  //     date: "22/2/2020",
  //     author:"Trịnh Quang Tiến",
  //     content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."}
  // ]
  constructor(private httpData: LoadJsonService,private paginationService: PaginationService) {
    this.httpData.getData("blog.json").subscribe(value => {
      const blogArrObj = value.blog;
      Util.convertObj2BlogArr(blogArrObj,this.blogs);
      console.log(this.blogs);
      this.paginationService.setUpPagination(this.blogs.length,12);
    })
    this.paginationService.pagination$.subscribe(pagination=>{
      this.pagination = pagination;
    })

  }

  ngOnInit(): void {
  }

}
