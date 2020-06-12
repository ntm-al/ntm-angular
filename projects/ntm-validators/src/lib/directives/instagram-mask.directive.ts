import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appInstagramMask]'
})
export class InstagramMaskDirective implements OnInit {
  private previousValue = null;

  @Input('instagramMask') maskType: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => this.setMask(), 0);
  }

  @HostListener('ngModelChange')
  @HostListener('input')
  setMask() {
    let mask = this.createMask(this.el.nativeElement.value);
    if (this.el.nativeElement.value !== this.previousValue) {
      this.el.nativeElement.value = mask;
      this.previousValue = mask;
      this.el.nativeElement.dispatchEvent(new Event('input'));
      setTimeout(() => {
        this.el.nativeElement.dispatchEvent(new Event('input'));
      });
    }
  }

  createMask(instagram) {
    if (instagram.length == 0) {
      return '';
    }

    if (instagram.length <= 31) {
      instagram = instagram.replace(/[&\/\\#,+()$~%'"@:;*?!|<>=¨`´^{}[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ]/g, '');
      instagram = instagram.replace(/]/g, '');
      return '@'+instagram;
    }

    return instagram.substr(0, 30);
  }
}
