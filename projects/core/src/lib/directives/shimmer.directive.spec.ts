/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ShimmerDirective } from './shimmer.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IShimmer } from '../interfaces/shimmer.interface';

const shimmerInfo: IShimmer = {
  width: '200px',
  height: '30px',
};

@Component({
  template: ` <div [ntmShimmer]="flag" [ntmShimmerInfo]="shimmerInfo">
    Shimmer test!
  </div>`,
})
class TestShimmerDirectiveComponent {
  flag = true;
  shimmerInfo = shimmerInfo;
}

describe('ShimmerDirective', () => {
  let component: TestShimmerDirectiveComponent;
  let fixture: ComponentFixture<TestShimmerDirectiveComponent>;
  let divNativeElement: HTMLDivElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestShimmerDirectiveComponent, ShimmerDirective],
    });
    fixture = TestBed.createComponent(TestShimmerDirectiveComponent);
    component = fixture.componentInstance;
    divNativeElement = fixture.debugElement.query(By.css('div')).nativeElement;
  });
  it('should show the shimmer effect', () => {
    component.flag = true;
    fixture.detectChanges();
    void expect(divNativeElement.style.height).toBe(shimmerInfo.height);
    void expect(divNativeElement.style.width).toBe(shimmerInfo.width);
    void expect(divNativeElement.classList.item(0)).toBe('shimmer');
  });
  it('should show div content', () => {
    component.flag = false;
    fixture.detectChanges();
    void expect(divNativeElement.style.height).toBe('auto');
    void expect(divNativeElement.style.width).toBe('auto');
    void expect(divNativeElement.classList.item(0)).toBeNull();
  });
});
