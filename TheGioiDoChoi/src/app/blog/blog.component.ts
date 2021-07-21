import { Component, OnInit } from '@angular/core';
import {Blog} from "../model/blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs: Blog[]| undefined;
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
  constructor() { }

  ngOnInit(): void {
  }

}
