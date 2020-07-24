/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[phoneMask]',
})
export class PhoneMaskDirective implements OnInit {
  @Input('phoneMask') maskType: any;
  private previousValue = null;

  constructor(private el: ElementRef) {}

  @HostListener('ngModelChange')
  @HostListener('input')
  setMask(): void {
    const mask = this.createMask(this.el.nativeElement.value);
    if (this.el.nativeElement.value !== this.previousValue) {
      this.el.nativeElement.value = mask;
      this.previousValue = mask;
      this.el.nativeElement.dispatchEvent(new Event('input'));
      setTimeout(() => {
        this.el.nativeElement.dispatchEvent(new Event('input'));
      });
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.setMask(), 0);
  }

  createMask(phone: string): string {
    phone = phone.replace(/\D/g, '');
    if (phone.length == 0) {
      return '';
    }
    if (phone.length <= 2) {
      return phone.replace(/^(\d{0,2})/, '($1');
    }
    if (phone.length <= 7) {
      return phone.replace(/^(\d{0,2})(.*)/, '($1) $2');
    }
    if (phone.length <= 10 && this.maskType == 9) {
      return phone.replace(/^(\d{0,2})(\d{0,5})(.*)/, '($1) $2-$3');
    }
    if (phone.length <= 10) {
      return phone.replace(/^(\d{0,2})(\d{0,4})(.*)/, '($1) $2-$3');
    }
    return phone.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})/, '($1) $2-$3-$4').substr(0, 16);
  }
}
