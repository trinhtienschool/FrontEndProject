import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-age-gender',
  templateUrl: './age-gender.component.html',
  styleUrls: ['./age-gender.component.scss']
})
export class AgeGenderComponent implements OnInit {
  @Input() title: string|undefined;
  @Input() content: any[]|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
