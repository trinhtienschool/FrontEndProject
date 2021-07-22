import {Product} from "./product";
import {isArray} from "rxjs/internal-compatibility";
import {Blog} from "./blog";

export class Util{
  public static parseString2Int(value: any){
    if(typeof value == "string") return parseInt(value);
    else if(typeof value == "number") return value;
    else return 0;
  }
  public static convertObj2ProArr(items: Object, arr: Product[]|undefined){
    if(isArray(items)){
      for(let p_item of items){
        let product = new Product(p_item.name,
          this.parseString2Int(p_item.price),
          this.parseString2Int(p_item.price_sale),
          p_item.brand,
          p_item.product_id,
          p_item.description,
          this.convertToAgeType(p_item.age),
          this.convertToGenderType(p_item.gender),
          []);
        // console.log("img1: "+p_item.img1);
        if(p_item.img1 !=undefined) product.images.push(p_item.img1);
        if(p_item.img2 !=undefined) product.images.push(p_item.img2);
        if(p_item.img3 !=undefined) product.images.push(p_item.img3);
        if(p_item.img4 !=undefined) product.images.push(p_item.img4);

        if(arr !=undefined) arr.push(product);;
        // console.log("product: "+product.toString());
      }

    }
  }
  private static convertToAgeType(age: any){
    if(age==1) return "Từ 1-6 tuổi";
    else if(age == 2) return "Từ 6-11 tuổi";
    else if(age == 3) return "Trên 11 tuổi";
    else return "Không xác định";
  }
  private static convertToGenderType(gender: any){
    if(gender == 1) return "Nam";
    else if(gender == 2) return "Nữ";
    else if(gender == 3) return "Cả 2";
    else return "Không xác định";
  }
  public static convertObj2BlogArr(items: Object, arr: Blog[]|undefined){
    if(isArray(items)){
      for(let b_item of items){
        let blog = {
          name:b_item.name,
          author: b_item.author,
          img1: b_item.img1,
          content: b_item.content,
          date: b_item.date
        }
        if(arr !=undefined) arr.push(blog);

      }
      // console.log("product: "+arr);
    }
  }
  public static convertCurrencyToNumber(currency: string){
    let number: string='0';
    for(let c of currency){
      if (c >= '0' && c <= '9')  {
        number += c;
      }
    }
    return parseInt(number);
  }
}
