import { Component, OnInit } from '@angular/core';
import { HostListener } from'@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor() { }

	ngOnInit() {}

	@HostListener("window:scroll", [])
	onWindowScroll() {

		const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (number > 820) {
			return true;

		} else if (number > 2000) {
			return false;

		}

	}

	onWindowfix(){
		const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (number < 821) {
			return true;

		} else if (number < 2000) {
			return false;

		}
	}

}
