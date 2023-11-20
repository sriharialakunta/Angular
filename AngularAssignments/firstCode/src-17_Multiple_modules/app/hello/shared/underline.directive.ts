import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective {
  constructor(private e1: ElementRef) {}
  @HostListener('mouseenter') changeToBlue() {
    this.e1.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') changeToYellow() {
    this.e1.nativeElement.style.backgroundColor = 'blue';
  }
}
