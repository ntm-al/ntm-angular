/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CnpjMaskDirective } from './cnpj-mask.directive';
@Component({
  template: '<input type="text" ntmCnpjMask>',
})
class TestCnpjMaskDirectiveComponent {}

describe('CnpjMaskDirective', () => {
  let fixture: ComponentFixture<TestCnpjMaskDirectiveComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCnpjMaskDirectiveComponent, CnpjMaskDirective],
    });
    fixture = TestBed.createComponent(TestCnpjMaskDirectiveComponent);
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should cnpj mask lenght equals 18', () => {
    const arrage = {
      input: '9550387900010993921382183218',
    };
    const input = inputEl.nativeElement;
    input.value = arrage.input;
    input.dispatchEvent(new Event('input'));
    void expect(input.value.length).toEqual(18);
  });
  it('should apply mask for cnpj', () => {
    const arrage = {
      input: '95503879000109',
      expect: '95.503.879/0001-09',
    };
    const input = inputEl.nativeElement;
    input.value = arrage.input;
    input.dispatchEvent(new Event('input'));
    void expect(input.value).toBe(arrage.expect);
  });

  it('should not apply mask for not valid cnpj', () => {
    const arr = {
      input: 'ss-$sdf',
      expect: '',
    };
    const input = inputEl.nativeElement;
    input.value = arr.input;
    input.dispatchEvent(new Event('input'));
    void expect(input.value).toBe(arr.expect);
  });

  it('should return correct formated cnpj string', () => {
    const arr = [
      {
        input: '9550',
        expect: '95.50',
      },
      {
        input: '9550387',
        expect: '95.503.87',
      },
    ];
    const cnpjMask = new CnpjMaskDirective(fixture);
    arr.forEach((arrage) => {
      void expect(cnpjMask.createMask(arrage.input)).toBe(arrage.expect);
    });
  });
});
