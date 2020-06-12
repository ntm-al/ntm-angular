import { FormControl } from '@angular/forms';

export class ValidateEmail {
  static valid(control: FormControl) {
    if (!control.value) return null;
    if(ValidateEmail.valid_email(control.value)){
      return null;
    }
    return {
      validateEmail: {
        valid: false
      }
    }
  }
  static valid_email(email) {
    const REG_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return REG_EMAIL.test(email.toLowerCase());
  }
}
