import { Directive, HostListener, HostBinding, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appNavcolor]'
})
export class NavcolorDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){

  }

  @HostListener('click') onMouseClick() {
  	this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

}
