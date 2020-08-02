/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ntmOnlyNumbers]',
})
export class OnlyNumbersDirective implements OnInit {
  private previousValue = null;
  constructor(private el: ElementRef) {}
  @HostListener('ngModelChange')
  @HostListener('input')
  setRule(): void {
    const mask = this.createRule(this.el.nativeElement.value);
    if (this.el.nativeElement.value !== this.previousValue) {
      this.el.nativeElement.value = mask;
      this.previousValue = mask;
      this.el.nativeElement.dispatchEvent(new Event('input'));
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.setRule(), 0);
  }

  createRule(value: string): string {
    const regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
    if (!String(value).match(regex)) {
      return value.replace(/[^0-9\\.]+/g, '');
    }
    return value;
  }
}
