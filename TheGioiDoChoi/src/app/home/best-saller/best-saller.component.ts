import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-best-saller',
  templateUrl: './best-saller.component.html',
  styleUrls: ['./best-saller.component.scss']
})
export class BestSallerComponent implements OnInit {
  @Input() bestSaller: Product[]| undefined;
  public product_best_sallers: Product[] |undefined
  // =   [
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //   new Product("SP1",3000,2000,"brand","pId","description",[
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
  //     'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
  //   ]),
  //
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
