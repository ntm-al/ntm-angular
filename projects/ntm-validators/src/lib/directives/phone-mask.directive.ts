import { Directive, HostListener, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[phoneMask]'
})
export class PhoneMaskDirective implements OnInit {
  private previousValue = null;

  @Input('phoneMask') maskType: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => this.setMask(), 0);
  }

  @HostListener('ngModelChange')
  @HostListener('input')
  setMask(){
    let mask = this.createMask(this.el.nativeElement.value);
    if(this.el.nativeElement.value !== this.previousValue){
      this.el.nativeElement.value = mask;
      this.previousValue = mask;
      this.el.nativeElement.dispatchEvent(new Event('input'));
      setTimeout(()=> {
        this.el.nativeElement.dispatchEvent(new Event('input'));
      });
    }
  }

  createMask(phone) {
    phone = phone.replace(/\D/g, '');
    if (phone.length == 0) {
      return '';
    }
    if (phone.length <= 2) {
      return phone.replace(/^(\d{0,2})/, '$1');
    }
    if (phone.length <= 7) {
      return phone.replace(/^(\d{0,2})(.*)/, '$1 $2');
    }
    if (phone.length <= 10 && this.maskType == 9) {
      return phone.replace(/^(\d{0,2})(\d{0,5})(.*)/, '$1 $2-$3');
    }
    if (phone.length <= 10) {
      return phone.replace(/^(\d{0,2})(\d{0,4})(.*)/, '$1 $2-$3');
    }
    return phone.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, '$1 $2-$3').substr(0,13);
  }
}
