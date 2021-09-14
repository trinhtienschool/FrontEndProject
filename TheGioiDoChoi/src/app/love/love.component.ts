import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {LoveService} from "../service/love/love.service";

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss']
})
export class LoveComponent implements OnInit {
  loveItems : Product[] = [];
  constructor(private loveService: LoveService) {
    this.loveService.love$.subscribe(love => {this.loveItems = love});
  }

  ngOnInit(): void {
  }
  // Todo: xóa sản phẩm yêu thích
  deleteLoveItem(item: Product) {
    this.loveService.deleteItemLove(item);
  }
  public getFirstImage(love: Product){
    let listImage=love.images;
    return listImage[0];
  }
}
