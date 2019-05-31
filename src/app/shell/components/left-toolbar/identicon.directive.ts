import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import jdenticon from 'jdenticon';

@Directive({selector: '[hash]'})
export class IdenticonDirective implements OnChanges {

  @Input() hash: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    jdenticon.update(this.element.nativeElement, this.hash);
  }

}
