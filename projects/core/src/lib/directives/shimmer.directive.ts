/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Directive, HostBinding, Input, ElementRef, OnChanges } from '@angular/core';
import { IShimmer } from '../interfaces/shimmer.interface';

@Directive({
  selector: '[ntmShimmer]',
})
export class ShimmerDirective implements OnChanges {
  @Input() ntmShimmer: boolean;
  @Input() ntmShimmerInfo: IShimmer;

  @HostBinding('class.shimmer') get shimmer(): boolean {
    return this.ntmShimmer;
  }
  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if (this.ntmShimmer) {
      this.el.nativeElement.style.width = this.ntmShimmerInfo.width;
      this.el.nativeElement.style.height = this.ntmShimmerInfo.height;
    } else {
      this.el.nativeElement.style.width = 'auto';
      this.el.nativeElement.style.height = 'auto';
    }
  }
}
