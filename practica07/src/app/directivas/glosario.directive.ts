import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGlosario]'
})
export class GlosarioDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onHover() {
    const span = this.elementRef.nativeElement.querySelector('span');
    this.renderer.addClass(span, 'activo');

  }

  @HostListener('mouseout') onOut() {
    const span = this.elementRef.nativeElement.querySelector('span');
    this.renderer.removeClass(span, 'activo');

  }
}
