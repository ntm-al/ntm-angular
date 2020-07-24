import { AbstractControl } from '@angular/forms';
import { IValidator } from '../interfaces/validators.interface';

export function ValidatePhone(control: AbstractControl): IValidator {
  const phoneNumberValue = control.value as string;

  if (!phoneNumberValue) {
    return null;
  }

  const ZIP_CELL_PHONE = /^[(]?[1-9][0-9]?[)]?[ ]?[9][3-9][0-9]?[-]?[0-9]{3}?[-]?[0-9]{3}$/;
  const ZIP_PHONE = /^[(]?[1-9][0-9]?[)]?[ ]?[2-6][0-9]{3}?[-]?[0-9]{4}$/;
  const dddState = [
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    21,
    22,
    24,
    27,
    28,
    31,
    32,
    33,
    34,
    35,
    37,
    38,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    51,
    53,
    54,
    55,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    71,
    73,
    74,
    75,
    77,
    79,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
  ];
  let error = false;
  let checkRegex: boolean;
  const phone = phoneNumberValue.replace(/[^\d]+/g, '');
  const dddPhone = phone.slice(0, 2);
  const phoneWithoutDDD: string = phone.replace(dddPhone, '');

  if (phone === '') {
    error = true;
  }
  const hasDDD = dddState.filter((ddd) => {
    if (parseInt(dddPhone) === ddd) {
      return ddd;
    }
  });

  if (!hasDDD.length) {
    error = true;
  }
  checkRegex = false;
  if (phoneWithoutDDD.length == 8) {
    // Is home phone or is cell phone without first phoneNumberValue (9)

    if (ZIP_PHONE.test(phoneNumberValue)) {
      // check if is home phone
      checkRegex = true;
    }
  } else if (phoneWithoutDDD.length === 9) {
    if (ZIP_CELL_PHONE.test(phoneNumberValue)) {
      // check if is cell phone
      checkRegex = true;
    }
  }

  if (phoneWithoutDDD === '900000000' || phoneWithoutDDD === '999999999') {
    error = true;
  }

  if (checkRegex && !error) {
    return null;
  }

  return {
    validate: false,
    message: 'Telefone inválido',
  };
}
