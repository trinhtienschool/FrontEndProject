import {Component, OnInit} from '@angular/core';
import {ProductSlickList} from "../../model/product-slick-list";
import {Product} from "../../model/product";

@Component({
  selector: 'app-feature-home',
  templateUrl: './feature-home.component.html',
  styleUrls: ['./feature-home.component.scss']
})
export class FeatureHomeComponent implements OnInit {

  public featureHightLightProduct: Product[] =   [
      new Product("SP1",3000,0,"brand","pId","description",[
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
      ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),
    new Product("SP1",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/magento/MAISTO/MT39900_39514/MT39900_39514_1.jpg'
    ]),

    ]

  public featureLatestProduct: Product[] =   [
      new Product("SP2",3000,2000,"brand","pId","description",[
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/0/3/03_246.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/0/3/03_246.jpg'
      ]),
    new Product("SP2",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/0/3/03_246.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/0/3/03_246.jpg'
    ])
    ]


  public featureBestSallerProduct:Product[] =   [
      new Product("SP2",3000,2000,"brand","pId","description",[
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/3/0/304035_7_.jpg',
        'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/3/0/304035_7_.jpg'
      ]),
    new Product("SP2",3000,2000,"brand","pId","description",[
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/3/0/304035_7_.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/3/0/304035_7_.jpg'
    ])
    ]


  constructor() {
  console.log("Dang vao feature-home constructor");
  }

  ngOnInit(): void {
    console.log("Dang vao feature-home ngOnInit")
  }


}
