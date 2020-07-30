/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
@Component({
  template: '<input type="text" ntmCnpjMask>',
})
class TestCnpjMaskDirectiveComponent {}

describe('CpfMaskDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCnpjMaskDirectiveComponent],
    }).createComponent(TestCnpjMaskDirectiveComponent);
  });
});
