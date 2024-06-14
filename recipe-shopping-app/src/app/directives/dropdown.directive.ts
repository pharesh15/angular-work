import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  @HostListener('click') toggleDropdown() {
    if (this.isOpen) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
    this.isOpen = !this.isOpen;
  }
}
