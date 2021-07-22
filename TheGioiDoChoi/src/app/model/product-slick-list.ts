import {Product} from "./product";

export interface ProductSlickList{
  autoplaySpeed: number,
  slidesToShow: number,
  rows: number,
  dataslickresponsive: string,
  productCard: Product[]
}
