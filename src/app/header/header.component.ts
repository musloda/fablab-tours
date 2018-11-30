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
/*
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
	*/
	window;onload=function(){
		document.window
		(document).ready (function(){
			$(".sidebarNavigation .navbar-collapse")
			.hide().clone().appendTo("body")
			.removeAttr("class").addClass("sideMenu").show(),
			$("body").append("<div class='overlay'></div>"),
			$(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")),
			$(".navbar-toggle, .navbar-toggler").on("click",function(){
				$(".sideMenu, .overlay").toggleClass("open"),
				$(".overlay").on("click",function(){
					$(this).removeClass("open"),
					$(".sideMenu").removeClass("open")})}),
			$("body").on("click",".sideMenu.open .nav-item",function(){
				$(this).hasClass("dropdown")||$(".sideMenu, .overlay").toggleClass("open")}),
			$(window).resize(function(){$(".navbar-toggler").is(":hidden")?
				$(".sideMenu, .overlay").hide():$(".sideMenu, .overlay").show()})}):
		console.log("sidebarNavigation Requires jQuery")};

	}
