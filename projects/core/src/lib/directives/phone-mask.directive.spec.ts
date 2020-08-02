import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PhoneMaskDirective } from './phone-mask.directive';

@Component({
  template: '<input ntmPhoneMask>',
})
class TestPhoneMaskDirectiveComponent {}

describe('PhoneMaskDirective', () => {
  let fixture: ComponentFixture<TestPhoneMaskDirectiveComponent>;
  let inputEl: HTMLInputElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPhoneMaskDirectiveComponent, PhoneMaskDirective],
    });
    fixture = TestBed.createComponent(TestPhoneMaskDirectiveComponent);
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
  });
  it('should apply mask for number with 8 digits', () => {
    const arr = {
      input: '8299205555',
      expect: '(82) 9920-5555',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value).toBe(arr.expect);
  });

  it('should not apply mask for not valid number', () => {
    const arr = {
      input: 'ss-$sdf',
      expect: '',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value).toBe(arr.expect);
  });

  it('should apply mask for number with 9 digits', () => {
    const arr = {
      input: '82999205555',
      expect: '(82) 999-205-555',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value).toBe(arr.expect);
  });

  it('should return correct formated phone string', () => {
    const arr = [
      {
        input: '82999',
        expect: '(82) 999',
      },
      {
        input: '82999999',
        expect: '(82) 9999-99',
      },
      {
        input: '82999999999',
        expect: '(82) 999-999-999',
      },
      {
        input: '8230330113',
        expect: '(82) 3033-0113',
      },
    ];
    const phoneMask = new PhoneMaskDirective(fixture);
    arr.forEach((arrage) => {
      void expect(phoneMask.createMask(arrage.input)).toBe(arrage.expect);
    });
  });
});
