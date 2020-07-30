/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input type="text" ntmCnpjMask>',
})
class TestCnpjMaskDirectiveComponent {}

describe('CpfMaskDirective', () => {
  let fixture: ComponentFixture<TestCnpjMaskDirectiveComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestCnpjMaskDirectiveComponent],
    }).createComponent(TestCnpjMaskDirectiveComponent);
    inputEl = fixture.debugElement.query(By.css('input'));
  });
});
