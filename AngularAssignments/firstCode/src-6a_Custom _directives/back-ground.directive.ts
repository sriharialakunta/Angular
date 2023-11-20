import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackGround]',
})
export class BackGroundDirective {
  constructor(private e1: ElementRef) {}

  @HostListener('mouseenter') changeToRed() {
    this.e1.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave') changeToYellow() {
    this.e1.nativeElement.style.backgroundColor = 'yellow';
  }
}
