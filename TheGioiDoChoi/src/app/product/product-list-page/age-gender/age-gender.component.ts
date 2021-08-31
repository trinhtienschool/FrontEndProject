import {AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-age-gender',
  templateUrl: './age-gender.component.html',
  styleUrls: ['./age-gender.component.scss']
})
export class AgeGenderComponent implements OnInit {
  @Input() title: string|undefined;
  @Input() content: any[]|undefined;
  public initCheckAge : string |undefined;
  public initCheckGender: string|undefined;
  constructor(private productService: ProductService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(param =>{
     this.initCheckAge = param.age;
     this.initCheckGender = param.geder;


    } )
  }
  ngOnInit(): void {
  }

  check(value: string, checkbox: any) {
    console.log(checkbox);
    console.log(checkbox.checked);
    if(this.title == 'Độ tuổi'){
      this.modifiedArr(value,this.productService.ageFilter,checkbox);
    }else if(this.title == 'Giới tính'){
      this.modifiedArr(value,this.productService.genderFilter,checkbox);
    }
    this.productService.filter();
  }
  modifiedArr(value: string,arr: string[], checkbox: any){
    console.log("Includes: "+arr.includes(value));
    if(checkbox.checked){
      if(!arr.includes(value)) arr.push(value);
    }else if(arr.includes(value)){
      const index = arr.indexOf(value);
      arr.splice(index,1);
    }
  }
}
