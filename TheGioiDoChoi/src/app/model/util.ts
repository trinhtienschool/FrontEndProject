import {Product} from "./product";
import {isArray} from "rxjs/internal-compatibility";
import {Blog} from "./blog";
import {SimpleChanges} from "@angular/core";

export class Util {
  public static parseString2Int(value: any) {
    if (typeof value == "string") return parseInt(value);
    else if (typeof value == "number") return value;
    else return 0;
  }

  public static convertObj2ProArr(items: Object, arr: Product[] | undefined, category: string) {
    if (isArray(items)) {
      for (let p_item of items) {
        let product = new Product(p_item.name,
          this.parseString2Int(p_item.price),
          this.parseString2Int(p_item.price_sale),
          p_item.brand,
          p_item.product_id,
          p_item.description,
          this.convertToAgeType(p_item.age),
          this.convertToGenderType(p_item.gender),
          [],
          category);
        // console.log("img1: "+p_item.img1);
        if (p_item.img1 != undefined) product.images.push(p_item.img1);
        if (p_item.img2 != undefined) product.images.push(p_item.img2);
        if (p_item.img3 != undefined) product.images.push(p_item.img3);
        if (p_item.img4 != undefined) product.images.push(p_item.img4);
        for(let i=0;i<4;i++){
          if(product.images[i] ==undefined || product.images[i].length==0)
            product.images.push(product.images[0]);
        }
        if (arr != undefined) arr.push(product);
      }

    }
  }

  private static convertToAgeType(age: any) {
    if (age == 1) return "1-6";
    else if (age == 2) return "6-11";
    else if (age == 3) return "tren-11";
    else return "khong-xac-dinh";
  }

  private static convertToGenderType(gender: any) {
    if (gender == 1) return "nam";
    else if (gender == 2) return "nu";
    else if (gender == 3) return "ca-2";
    else return "khong-xac-dinh";
  }

  public static convertObj2BlogArr(items: Object, arr: Blog[] | undefined) {
    if (isArray(items)) {
      for (let b_item of items) {
        let blog = {
          name: b_item.name,
          author: b_item.author,
          img1: b_item.img1,
          content: b_item.content,
          date: b_item.date,
          id: b_item.id
        }
        if (arr != undefined) arr.push(blog);

      }
      // console.log("product: "+arr);
    }
  }

  public static convertCurrencyToNumber(currency: string): string {
    let number: string = '';
    for (let c of currency) {
      if (c >= '0' && c <= '9') {
        number += c;
      }
    }
    return number;
  }

  public static makeLinkProduc(category: string | undefined, startPrice: string | undefined, endPrice: string | undefined, age: string[] | undefined, gender: string[] | undefined, search: string | undefined, sort: string | undefined,page: string|undefined): string {
    let link = '/product?';
    if (category != undefined) link += 'category=' + category;
    if (startPrice != undefined && endPrice != undefined) link += '&startPrice=' + startPrice + "&endPrice=" + endPrice;
    if (age != undefined) link += this.makeLinkInArr(age, 'age');
    if (gender != undefined) link += this.makeLinkInArr(gender, 'gender');
    if (search != undefined) link += '&search=' + search;
    if (sort != undefined) link += '&sort=' + sort;
    if (page != undefined) link += '&page=' + page;
    return link;
  }

  private static makeLinkInArr(arr: string[], type: string): string {
    let link = '&';
    if (arr.length != 0) {
      for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) link += type + '=' + arr[i];
        else link += type + '=' + arr[i] + "&";
      }
    }
    return link;
  }

  // public static onChange(changes: SimpleChanges, age: string[] | undefined, gender: string[] | undefined, category: string | undefined, startPrice: string | undefined, endPrice: string | undefined, search: string | undefined, sort: string | undefined, page: string | undefined) {
  //   age = changes.age.currentValue;
  //   gender = changes.gender.currentValue;
  //   category = changes.category.currentValue;
  //   startPrice = changes.startPrice.currentValue;
  //   endPrice = changes.endPrice.currentValue;
  //   search = changes.search.currentValue;
  //   sort = changes.sort.currentValue;
  //   page = changes.page.currentValue;
  // }
}
