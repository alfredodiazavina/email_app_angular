import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMessageButton]'
})

export class MessageButtonDirective {
  @Input('appMessageButton') public highlightColor: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  handleOnEnter() {
    this.applyStyles(this.highlightColor || 'blue', '1px solid white');
  }

  @HostListener('mouseleave')
  handleOnLeave() {
    this.applyStyles(null, null);
  }

  applyStyles(backgroundColor: string, border: string): void {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.border = border;
  }
}

