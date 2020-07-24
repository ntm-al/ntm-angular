import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZipCodeMaskDirective } from './zip-code-mask.directive';

@Component({
  template: '<input type="text" appZipCodeMask>',
})
class TestZipCodeMaskDirectiveComponent {}

describe('ZipCodeMaskDirective', () => {
  let fixture: ComponentFixture<TestZipCodeMaskDirectiveComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestZipCodeMaskDirectiveComponent],
    }).createComponent(TestZipCodeMaskDirectiveComponent);
  });

  it('should return correct formated zip-code string', () => {
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
