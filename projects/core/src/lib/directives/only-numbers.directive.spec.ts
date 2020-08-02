/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input ntmOnlyNumbers>',
})
class TestOnlyNumbersDirectiveComponent {}

describe('OnlyNumbersDirective', () => {
  let fixture: ComponentFixture<TestOnlyNumbersDirectiveComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestOnlyNumbersDirectiveComponent, OnlyNumbersDirective],
    });
    fixture = TestBed.createComponent(TestOnlyNumbersDirectiveComponent);
    inputEl = fixture.debugElement.query(By.css('input'));
  });
  it('should apply only numbers directive', () => {
    const arr = {
      input: '1e9831',
      expect: '19831',
    };
    const input = inputEl.nativeElement;
    input.value = arr.input;
    input.dispatchEvent(new Event('input'));
    void expect(input.value).toBe(arr.expect);
  });

  it('should return correct numbers', () => {
    const arr = [
      {
        input: '123456',
        expect: '123456',
      },
      {
        input: '1e',
        expect: '1',
      },
      {
        input: '1.42',
        expect: '1.42',
      },
    ];
    const onlyNumber = new OnlyNumbersDirective(fixture);
    arr.forEach((arrage) => {
      // console.log(onlyNumber.createRule(arrage.input));
      void expect(onlyNumber.createRule(arrage.input)).toBe(arrage.expect);
    });
  });
});
