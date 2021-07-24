import { Component, OnInit } from '@angular/core';
declare const onloadFunction: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    onloadFunction();
  }

}
