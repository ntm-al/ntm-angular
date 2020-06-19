/* eslint-disable max-len */
import { AbstractControl } from '@angular/forms';
import { IValidator } from '../interfaces/validators.interface';

export function ValidateEmail(control: AbstractControl): IValidator {
  // tslint:disable-next-line: max-line-length
  const REG_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const emailValue = control.value as string;

  if (!emailValue || (emailValue && REG_EMAIL.test(emailValue.toLowerCase()))) {
    return null;
  }
  return {
    validate: false,
    message: 'Email inválido',
  };
}
