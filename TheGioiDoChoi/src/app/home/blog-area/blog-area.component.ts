import { Component, OnInit } from '@angular/core';
import {Blog} from "../../model/blog";

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss']
})
export class BlogAreaComponent implements OnInit {
  public blogs: Blog[] = [
    {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
      date: "22/2/2020",
      author:"Trịnh Quang Tiến",
      content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
    {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
      date: "22/2/2020",
      author:"Trịnh Quang Tiến",
      content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
    {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
      date: "22/2/2020",
      author:"Trịnh Quang Tiến",
      content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
    {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
      date: "22/2/2020",
      author:"Trịnh Quang Tiến",
      content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
    {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
      date: "22/2/2020",
      author:"Trịnh Quang Tiến",
      content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},
    {title: 'Đồ chơi mô hình lắp ráp Bugatti Chiron',
      date: "22/2/2020",
      author:"Trịnh Quang Tiến",
      content: "Tuyển tập những bộ đồ chơi máy bay điều khiển từ xa đó bạn có biết không vậy bạn,..."},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
