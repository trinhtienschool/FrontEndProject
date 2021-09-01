import {AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product/product.service";
import {Router} from "@angular/router";
import {Util} from "../../../model/util";

@Component({
  selector: 'app-age-gender',
  templateUrl: './age-gender.component.html',
  styleUrls: ['./age-gender.component.scss']
})
export class AgeGenderComponent implements OnInit, OnChanges {
  @Input() title: string | undefined;
  @Input() content: any[] | undefined;

  @Input() age: string[] | undefined;
  @Input() gender: string[] | undefined;
  @Input() category: string | undefined;
  @Input() startPrice: string | undefined;
  @Input() endPrice: string | undefined;
  @Input() search: string | undefined;
  @Input() sort: string | undefined;
  @Input() page: string|undefined;

  constructor(private productService: ProductService,
              private router: Router,
  ) {
    // this.activateRoute.queryParams.subscribe(param => {
    //   // this.age = param.age;
    //   // this.gender = param.geder;
    //   //get params
    //   this.category = param.category;
    //   this.startPrice = param.startPrice;
    //   this.endPrice = param.endPrice;
    //   this.search = param.search;
    //   this.sort = param.sort;
    //
    //
    //
    //   if (param.age != undefined) this.age = this.age.concat(param.age);
    //   if (param.gender != undefined) this.gender = this.gender.concat(param.gender);
    // })

  }

  ngOnChanges(changes: SimpleChanges): void {
        // throw new Error('Method not implemented.');
    console.log("chaangeeeee",changes);
    // Util.onChange(changes,this.age,this.gender,this.category,this.startPrice,this.endPrice,this.search,this.sort,this.page);
    console.log("Age-gender Age: "+this.title+": ",this.age);
    console.log("Age-gender Gender:"+this.title+": ", this.gender);
    if (this.title != undefined && this.gender != undefined && this.age != undefined) {
      if (this.title == 'Độ tuổi') {
        if (this.content != undefined) this.addChecked(this.content, this.age);
      } else if (this.title == 'Giới tính') {
        if (this.content != undefined) this.addChecked(this.content, this.gender);
      }
    }else if(this.title !=undefined && this.content !=undefined) this.deleteChecked(this.content);
    console.log("content: ",this.content);
    }

  ngOnInit(): void {
  }

  addChecked(content: any[][], arr: string[]) {
    for (let i = 0; i < content.length; i++) {
      if (arr.includes(content[i][0]) && content[i][2] !=true) content[i].splice(2,0,true);
    }
  }
  deleteChecked(content: any[][]){
    for(let i = 0;i<content.length;i++){
      if(content[i][2]==true){content[i].splice(2,1)};
    }
  }

  check(value: string, checkbox: any) {
    console.log(checkbox);
    console.log(checkbox.checked);
    if(this.age ==undefined) this.age=[];
    if(this.gender ==undefined)this.gender=[];
    if (this.title != undefined ) {
      if (this.title == 'Độ tuổi') {
        this.modifiedArr(value, this.age, checkbox);
      } else if (this.title == 'Giới tính') {
        this.modifiedArr(value, this.gender, checkbox);
      }
      let link = Util.makeLinkProduc(this.category, this.startPrice, this.endPrice, this.age, this.gender, this.search, this.sort, this.page);
      console.log('Linkkkk',link);
      this.router.navigateByUrl(link);
    }
  }

  modifiedArr(value: string, arr: string[], checkbox: any) {
    console.log("Includes: " + arr.includes(value));
    console.log('ArrFirst: ',arr);
    if (checkbox.checked) {
      if (!arr.includes(value)) arr.push(value);
    } else if (arr.includes(value)) {
      const index = arr.indexOf(value);
      arr.splice(index, 1);
    }
    console.log('arrrrrrrrModifierArr: ',arr);
  }
}
