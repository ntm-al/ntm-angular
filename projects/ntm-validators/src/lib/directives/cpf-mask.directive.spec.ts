import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../shared.module';
import { CpfMaskDirective } from './cpf-mask.directive';

@Component({
  template: '<input type="text" appCpfMask>'
})
class TestCpfMaskDirectiveComponent {
}

describe('CpfMaskDirective', () => {
  let component: TestCpfMaskDirectiveComponent;
  let fixture: ComponentFixture<TestCpfMaskDirectiveComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [TestCpfMaskDirectiveComponent]
    }).createComponent(TestCpfMaskDirectiveComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should apply mask for cpf', () => {
    const arr = {
      input: '10552295078',
      expect: '105.522.950-78',
    };
    const input = inputEl.nativeElement;
    input.value = arr.input;
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe(arr.expect);
  });

  it('should not apply mask for not valid cpf', () => {
    const arr = {
      input: 'ss-$sdf',
      expect: '',
    };
    const input = inputEl.nativeElement;
    input.value = arr.input;
    input.dispatchEvent(new Event('input'));
    inputEl.triggerEventHandler('input', null);
    expect(input.value).toBe(arr.expect);
  });

  it('should return correct formated cpf string', () => {
    const arr = [{
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
    }];
    const cpfMask = new CpfMaskDirective(fixture);
    arr.forEach(arrage => {
      expect(cpfMask.createMask(arrage.input)).toBe(arrage.expect);
    });
  });
});
