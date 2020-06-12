import { AbstractControl } from '@angular/forms';

export function ValidateRequired(control: AbstractControl) {
  if (!control.value || control.value === '') {
    return {
      validate: false,
      message: 'Campo obrigatório'
    };
  }

  return null;
}

export class ValidateFields {
  thisUpdateValidators(form) {
    for (const key in form.controls) {
      if (form.controls.hasOwnProperty(key)) {
        form.controls[key].markAsTouched();
      }
    }
    return form;
  }
}
