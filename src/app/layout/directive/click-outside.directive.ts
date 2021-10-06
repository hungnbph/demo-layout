import { ThrowStmt } from '@angular/compiler';
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  toggle: boolean;
  constructor(
    private elm : ElementRef,
  ) { }
  @HostListener('document:click', ['$event.target'])
  public onClick(target:any) {
    const clickedInside = this.elm.nativeElement.contains(target);
    if (!clickedInside) {
      if(this.toggle == true){
        this.clickOutside.emit();
        console.log('outside')
      }
    }
  }
}
