import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwitterMaskDirective } from './twitter-mask.directive';

@Component({
  template: '<input type="text" twitterMask>',
})
class TestTwitterMaskDirectiveComponent {}

describe('PhoneMaskDirective', () => {
  let fixture: ComponentFixture<TestTwitterMaskDirectiveComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestTwitterMaskDirectiveComponent],
    }).createComponent(TestTwitterMaskDirectiveComponent);
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
