import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAttribute]',
})
export class AttributeDirective implements OnChanges {
  @Input()
  public appAttribute: object | undefined;


  constructor(private element: ElementRef<HTMLElement>) {}


  public ngOnChanges() {
    for (let key in this.appAttribute) {
      // @ts-ignore
      this.element.nativeElement.setAttribute(key, this.appAttribute[key]);
    }
  }
}
