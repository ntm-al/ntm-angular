/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appInstagramMask]',
})
export class InstagramMaskDirective implements OnInit {
  @Input('instagramMask') maskType: any;
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

  createMask(instagram: string): string {
    if (instagram.length == 0) {
      return '';
    }

    if (instagram.length <= 31) {
      instagram = instagram.replace(
        /[&\/\\#,+()$~%'"@:;*?!|<>=¨`´^{}[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ]/g,
        ''
      );
      instagram = instagram.replace(/]/g, '');
      return '@' + instagram;
    }

    return instagram.substr(0, 30);
  }
}
