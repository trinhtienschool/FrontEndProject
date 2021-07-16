import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fuild-banner',
  templateUrl: './fuild-banner.component.html',
  styleUrls: ['./fuild-banner.component.scss']
})
export class FuildBannerComponent implements OnInit {
  @Input() img_src: string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
