import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCargaSuave]'
})
export class CargaSuaveDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    setTimeout(() => {
      this.renderer.addClass(this.elementRef.nativeElement, 'mostrado');
    }, 1)
  }

}
