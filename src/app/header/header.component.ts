import { Component, OnInit } from '@angular/core';
import { HostListener } from'@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	filterDisplayed: boolean;
	constructor() { }
	
	ngOnInit() {
		this.filterDisplayed = false;
	}
	showFilter() {
		this.filterDisplayed = !this.filterDisplayed;
	}
};