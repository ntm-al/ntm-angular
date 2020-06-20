import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InstagramMaskDirective } from './instagram-mask.directive';

@Component({
  template: '<input type="text" twitterMask>',
})
class TestInstagramMaskDirectiveComponent {}

describe('InstagramMaskDirective', () => {
  let fixture: ComponentFixture<TestInstagramMaskDirectiveComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestInstagramMaskDirectiveComponent],
    }).createComponent(TestInstagramMaskDirectiveComponent);
  });

  it('should return correct formated instagram user string', () => {
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
        expect: '@us-er',
      },
    ];
    const instagramMask = new InstagramMaskDirective(fixture);
    arr.forEach((arrage) => {
      void expect(instagramMask.createMask(arrage.input)).toBe(arrage.expect);
    });
  });
});
