import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwitterMaskDirective } from './twitter-mask.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input ntmTwitterMask>',
})
class TestTwitterMaskDirectiveComponent {}

describe('TwitterMaskDirective', () => {
  let fixture: ComponentFixture<TestTwitterMaskDirectiveComponent>;
  let inputEl: HTMLInputElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTwitterMaskDirectiveComponent, TwitterMaskDirective],
    });
    fixture = TestBed.createComponent(TestTwitterMaskDirectiveComponent);
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
  });

  it('should apply mask for twitter', () => {
    const arr = {
      input: '@úser',
      expect: '@ser',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value).toBe(arr.expect);
  });

  it('should return correct formated twitter user string', () => {
    const arr = [
      {
        input: '@user',
        expect: '@user',
      },
      {
        input: '@úser',
        expect: '@ser',
      },
      {
        input: '@úser_3',
        expect: '@ser_3',
      },
      {
        input: '@us-er',
        expect: '@user',
      },
    ];
    const twitterMask = new TwitterMaskDirective(fixture);
    arr.forEach((arrage) => {
      void expect(twitterMask.createMask(arrage.input)).toBe(arrage.expect);
    });
  });
});
