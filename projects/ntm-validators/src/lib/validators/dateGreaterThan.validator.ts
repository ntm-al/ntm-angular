/* eslint-disable max-len */
import { AbstractControl } from '@angular/forms';

export function ValidateDateGreaterThan(controlToCompare: AbstractControl): any {
  let flagFirst = true;
  return (control: AbstractControl) => {
    if (flagFirst) {
      flagFirst = false;
      controlToCompare.valueChanges.subscribe(() => {
        control.patchValue(control.value);
      });
    }
    if (control.value <= controlToCompare.value) {
      return {
        validate: false,
        message: 'A data de término tem que ser maior que a data de início',
      };
    }
    return null;
  };
}
