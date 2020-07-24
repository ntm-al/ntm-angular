/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
})
export class OnlyNumbersDirective implements OnInit {
  private previousValue = null;
  // Allow decimal numbers and negative values
  private regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-'];

  constructor(private el: ElementRef) {}
  static createMask(value): string {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
    if (!String(value).match(regex)) {
      return value.substring(0, value.length - 1);
    }

    return value;
  }

  @HostListener('input')
  setMask(): void {
    const mask = OnlyNumbersDirective.createMask(this.el.nativeElement.value);
    if (this.el.nativeElement.value !== this.previousValue) {
      this.el.nativeElement.value = mask;
      this.previousValue = mask;
      this.el.nativeElement.dispatchEvent(new Event('input'));
    }
  }

  ngOnInit() {
    setTimeout(() => this.setMask(), 0);
  }
}
