import { Directive,Renderer2,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appEfeitoSombra]'
})
export class EfeitoSombraDirective {
 
  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2
  ) {}

  //diretiva para aplicar sombra quando maouse passar por cima
   @HostListener('mouseover')quandoMousePorCima(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow','2px 3px'
    )
  }
  //diretiva para aplicar sombra quando maouse sai
  @HostListener('mouseleave')quandoMouseSair(){
    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow')
  }

}
