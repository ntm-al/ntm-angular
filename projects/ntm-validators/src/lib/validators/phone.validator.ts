import { FormControl } from '@angular/forms';

export class ValidatePhone {
  static valid(control: FormControl) {
    return ValidatePhone.valid_cell_phone(control.value);
  }
  static valid_cell_phone(number) {
    if (!number) return null;

    const ZIP_CELL_PHONE = /^[1-9][0-9]?[ ]?[9][3-9][0-9]{3}?[-]?[0-9]{4}$/;
    const ZIP_PHONE = /^[1-9][0-9]?[ ]?[2-6][0-9]{3}?[-]?[0-9]{4}$/;
    const dddState = [
      11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31,
      32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51,
      53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75,
      77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95,
      96, 97, 98, 99
    ];
    let error = false,
      checkRegex,
      phone = number.replace(/[^\d]+/g, ""),
      dddPhone = phone.slice(0, 2),
      phoneWithoutDDD = phone.replace(dddPhone, "");

    if (phone == "") {
      error = true;
    }
    const hasDDD = dddState.filter(ddd => {
      if (parseInt(dddPhone) == ddd) {
        return ddd;
      }
    });

    if (!hasDDD.length) {
      error = true;
    }
    checkRegex = false;
    if (phoneWithoutDDD.length == 8) {
      //is home phone or is cell phone without first number (9)

      if (ZIP_PHONE.test(number)) {
        //check if is home phone
        checkRegex = true;
      }
    } else if (phoneWithoutDDD.length == 9) {
      if (ZIP_CELL_PHONE.test(number)) {
        // check if is cell phone
        checkRegex = true;
      }
    }

    if (phoneWithoutDDD == "900000000" || phoneWithoutDDD == "999999999") {
      error = true;
    }

    return checkRegex && !error
      ? null
      : {
          validateCellPhone: {
            valid: false
          }
        };
  }
}
