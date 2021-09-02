import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required,Validators.email]),
    'phone': new FormControl('', Validators.required),
    'note': new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  get f(){return this.contactForm.controls}
}
