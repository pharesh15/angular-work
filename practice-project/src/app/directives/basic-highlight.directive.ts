import { Directive, ElementRef } from '@angular/core';

// attribute directive
@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
