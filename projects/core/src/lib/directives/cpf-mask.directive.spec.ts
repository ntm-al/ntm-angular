import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CpfMaskDirective } from './cpf-mask.directive';

@Component({
  template: '<input ntmCpfMask>',
})
class TestCpfMaskDirectiveComponent {}

describe('CpfMaskDirective', () => {
  let fixture: ComponentFixture<TestCpfMaskDirectiveComponent>;
  let inputEl: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCpfMaskDirectiveComponent, CpfMaskDirective],
    });
    fixture = TestBed.createComponent(TestCpfMaskDirectiveComponent);
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
  });

  it('should mask length equals 14', () => {
    const arr = {
      input: '10552295078123123',
      expect: '105.522.950-78',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value.length).toEqual(14);
  });
  it('should apply mask for cpf', () => {
    const arr = {
      input: '10552295078',
      expect: '105.522.950-78',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value).toBe(arr.expect);
  });

  it('should not apply mask for not valid cpf', () => {
    const arr = {
      input: 'ss-$sdf',
      expect: '',
    };
    inputEl.value = arr.input;
    inputEl.dispatchEvent(new Event('input'));
    void expect(inputEl.value).toBe(arr.expect);
  });

  it('should return correct formated cpf string', () => {
    const arr = [
      {
        input: '1055',
        expect: '105.5',
      },
      {
        input: '1055229',
        expect: '105.522.9',
      },
      {
        input: '1055229507',
        expect: '105.522.950-7',
      },
    ];
    const cpfMask = new CpfMaskDirective(fixture);
    arr.forEach((arrage) => {
      void expect(cpfMask.createMask(arrage.input)).toBe(arrage.expect);
    });
  });
});
