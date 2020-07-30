import { AbstractControl } from '@angular/forms';
import { IValidator } from '../interfaces/validators.interface';

export function ValidateCnpj(control: AbstractControl): IValidator {
  const value = control.value as string;

  if (value) {
    const cnpj: string = value.replace(/[^\d]+/g, '');

    if (
      cnpj == '00000000000000' ||
      cnpj == '11111111111111' ||
      cnpj == '22222222222222' ||
      cnpj == '33333333333333' ||
      cnpj == '44444444444444' ||
      cnpj == '55555555555555' ||
      cnpj == '66666666666666' ||
      cnpj == '77777777777777' ||
      cnpj == '88888888888888' ||
      cnpj == '99999999999999'
    ) {
      return {
        validate: false,
        message: 'CNPJ inválido',
      };
    }

    let cnpjLength = cnpj.length - 2;
    let cnpjNumbers = cnpj.substring(0, cnpjLength);
    const digit = cnpj.substring(cnpjLength);
    let sum = 0;
    let pos = cnpjLength - 7;
    for (let i = cnpjLength; i >= 1; i--) {
      sum += parseInt(cnpjNumbers.charAt(cnpjLength - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result.toString() !== digit.charAt(0)) {
      return {
        validate: false,
        message: 'CNPJ inválido',
      };
    }

    cnpjLength = cnpjLength + 1;
    cnpjNumbers = cnpj.substring(0, cnpjLength);
    sum = 0;
    pos = cnpjLength - 7;
    for (let i = cnpjLength; i >= 1; i--) {
      sum += parseInt(cnpjNumbers.charAt(cnpjLength - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result.toString() != digit.charAt(1)) {
      return {
        validate: false,
        message: 'CNPJ inválido',
      };
    }

    return null;
  }
}
