/* eslint-disable max-len */
import { AbstractControl } from '@angular/forms';
import { IValidator } from '../interfaces/validators.interface';

export function ValidateInstagram(control: AbstractControl): IValidator {
  // tslint:disable-next-line: max-line-length
  const REG_INSTAGRAM = /^[a-zA-Z0-9_.]{0,30}/i;

  const instagramValue = control.value as string;

  if (!instagramValue || (instagramValue && REG_INSTAGRAM.test(instagramValue.toLowerCase()))) {
    return null;
  }
  return {
    validate: false,
    message: 'Instagram inválido',
  };
}
