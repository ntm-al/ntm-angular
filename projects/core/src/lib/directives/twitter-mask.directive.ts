/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[ntmTwitterMask]',
})
export class TwitterMaskDirective implements OnInit {
  @Input('ntmTwitterMask') maskType: any;
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

  createMask(twitter: string): string {
    if (twitter.length == 0) {
      return '';
    }

    if (twitter.length <= 16) {
      twitter = twitter.replace(
        /[&\/\\#,+()$~%.'"@:;*?!|<>=¨`´^{}[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ-]/g,
        ''
      );
      twitter = twitter.replace(/]/g, '');
      return '@' + twitter;
    }

    return twitter.substr(0, 15);
  }
}
