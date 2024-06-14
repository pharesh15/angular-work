import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicColor]',
})
export class BasicColorDirective {
  // renderer is better to use than the elementRef to change the dom element
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // ngOnInit(): void {
  //   // this.elementRef.nativeElement.style.color = 'red';
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
  //   this.renderer.setStyle(
  //     this.elementRef.nativeElement,
  //     'background-color',
  //     'yellow'
  //   );
  // }
  @HostListener('mouseover') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }
}
