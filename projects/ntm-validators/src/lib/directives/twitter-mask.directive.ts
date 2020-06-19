import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTwitterMask]'
})
export class TwitterMaskDirective implements OnInit {
  private previousValue = null;

  @Input('twitterMask') maskType: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => this.setMask(), 0);
  }

  @HostListener('ngModelChange')
  @HostListener('input')
  setMask() {
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

  createMask(twitter) {
    if (twitter.length == 0) {
      return '';
    }


    if (twitter.length <= 16) {
      twitter = twitter.replace(/[&\/\\#,+()$~%.'"@:;*?!|<>=¨`´^{}[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ-]/g, '');
      twitter = twitter.replace(/]/g, '');
      return '@'+twitter;
    }

    return twitter.substr(0, 15);
  }
}
