/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PhoneMaskDirective } from './phone-mask.directive';

@Component({
  template: '<input type="text" phoneMask>',
})
class TestPhoneMaskDirectiveComponent {}

describe('PhoneMaskDirective', () => {
  let fixture: ComponentFixture<TestPhoneMaskDirectiveComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [],
      declarations: [TestPhoneMaskDirectiveComponent],
    }).createComponent(TestPhoneMaskDirectiveComponent);
    inputEl = fixture.debugElement.query(By.css('input'));
  });
  it('should apply mask for number with 8 digits', () => {
    const arr = {
      input: '8299205555',
      expect: '82 9920-5555',
    };
    const input = inputEl.nativeElement;
    input.value = arr.input;
    input.dispatchEvent(new Event('input'));
    void expect(input.value).toBe(arr.expect);
  });

  it('should not apply mask for not valid number', () => {
    const arr = {
      input: 'ss-$sdf',
      expect: '',
    };
    const input = inputEl.nativeElement;
    input.value = arr.input;
    input.dispatchEvent(new Event('input'));
    inputEl.triggerEventHandler('input', null);
    void expect(input.value).toBe(arr.expect);
  });

  it('should apply mask for number with 9 digits', () => {
    const arr = {
      input: '82999205555',
      expect: '82 99920-5555',
    };
    const input = inputEl.nativeElement;
    input.value = arr.input;
    input.dispatchEvent(new Event('input'));
    inputEl.triggerEventHandler('input', null);
    void expect(input.value).toBe(arr.expect);
  });

  it('should return correct formated phone string', () => {
    const arr = [
      {
        input: '82999',
        expect: '82 999',
      },
      {
        input: '8299999',
        expect: '82 99999',
      },
      {
        input: '82999999999',
        expect: '82 99999-9999',
      },
    ];
    const phoneMask = new PhoneMaskDirective(fixture);
    arr.forEach((arrage) => {
      void expect(phoneMask.createMask(arrage.input)).toBe(arrage.expect);
    });
  });
});
