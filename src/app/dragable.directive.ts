import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDragable]'
})
export class DragableDirective {

  @Input('appDragable') public highlightColor: string;

  constructor(private el: ElementRef) {
    console.log('test');
    if (window.innerWidth > 750) {
      this.dragElement(this.el.nativeElement);
    }
  }

 dragElement(elmnt) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    if (false) {
      // if present, the header is where you move the DIV from:
      document.getElementById('drag-item').onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
      e = e || window.event;
      if (e.clientY < elmnt.offsetTop + 40) {
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      }
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:

      elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
      elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
      elmnt.style.margin = '0'; // I did this !!

      if (pos2 + elmnt.offsetTop > window.innerHeight - elmnt.clientHeight) {
        elmnt.style.top = (window.innerHeight - elmnt.clientHeight - 3) + 'px';
        // elmnt.offsetTop - pos2 > window.innerHeight - elmnt.offsetTop
      }
      if (pos2 > elmnt.offsetTop) {
        elmnt.style.top = pos2 + 'px';
      }
      if (elmnt.offsetLeft - pos1 > window.innerWidth - elmnt.offsetWidth - 19) {
        elmnt.style.left = (window.innerWidth - elmnt.offsetWidth - 19) + 'px';
      }
      if (pos1 > elmnt.offsetLeft - 15) {
        elmnt.style.left = (pos1 + 15) + 'px';
      }
    }
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

