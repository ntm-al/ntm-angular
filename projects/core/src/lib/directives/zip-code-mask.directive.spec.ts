import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZipCodeMaskDirective } from './zip-code-mask.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input type="text" ntmZipCodeMask>',
})
class TestZipCodeMaskDirectiveComponent {}

describe('ZipCodeMaskDirective', () => {
  let fixture: ComponentFixture<TestZipCodeMaskDirectiveComponent>;
  let inputEl: HTMLInputElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestZipCodeMaskDirectiveComponent, ZipCodeMaskDirective],
    });
    fixture = TestBed.createComponent(TestZipCodeMaskDirectiveComponent);
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
  });
  it('should mask length equals 9', () => {
    const arr = {
      input: '57072120',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value.length).toEqual(9);
  });
  it('should apply mask for zipcode', () => {
    const arr = {
      input: '57072120',
      expect: '57072-120',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value).toBe(arr.expect);
  });

  it('should not apply mask for not valid zipcode', () => {
    const arr = {
      input: 'ss-$sdf',
      expect: '',
    };

    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value).toBe(arr.expect);
  });

  it('should return correct formated zipcode string', () => {
    const arr = [
      {
        input: '57072120',
        expect: '57072-120',
      },
      {
        input: '57038000',
        expect: '57038-000',
      },
      {
        input: '57030170',
        expect: '57030-170',
      },
    ];
    const zipCodeMask = new ZipCodeMaskDirective(fixture);
    arr.forEach((arrage) => {
      void expect(zipCodeMask.createMask(arrage.input)).toBe(arrage.expect);
    });
  });
});
