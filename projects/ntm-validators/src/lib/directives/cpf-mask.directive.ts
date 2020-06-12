import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective implements OnInit {
  private previousValue = null;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => this.setMask(), 0);
  }

  @HostListener('input')
  setMask() {
    const mask = this.createMask(this.el.nativeElement.value);
    if (this.el.nativeElement.value !== this.previousValue) {
      this.el.nativeElement.value = mask;
      this.previousValue = mask;
      this.el.nativeElement.dispatchEvent(new Event('input'));
    }
  }

  createMask(cpf) {
    let newVal = cpf.replace(/\D/g, '');
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '$1');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(.*)/, '$1.$2');
    } else if (newVal.length <= 9) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '$1.$2.$3');
    } else {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(.*)/, '$1.$2.$3-$4');
    }
    return newVal;
  }
}

