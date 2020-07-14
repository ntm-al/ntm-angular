import { AbstractControl } from '@angular/forms';
import { IValidator } from '../interfaces/validators.interface';

export function ValidateRequired(control: AbstractControl): IValidator {
  if (!control.value || control.value === '') {
    return {
      validate: false,
      message: 'Campo obrigatório',
    };
  }

  return null;
}
