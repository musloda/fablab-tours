import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
constructor() { }

ngOnInit() {}

@HostListener('window:scroll', [])
onWindowScroll() {

const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (number > 790) {
    return true;
  } else if (number > 2000) {
      return false;
    }
}
onWindowfix() {
const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (number < 791) {
    return true;
    } else if (number < 2000) {
      return false;
    }
  }
}
