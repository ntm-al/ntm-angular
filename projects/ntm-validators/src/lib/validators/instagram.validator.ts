import { FormControl } from '@angular/forms';

export class ValidateInstagram {
  static valid(control: FormControl) {
    if (!control.value) {return null;}
    if(ValidateInstagram.valid_instagram(control.value)){
      return null;
    }
    return {
      validateInstagram: {
        valid: false
      }
    };
  }
  static valid_instagram(instagram) {
    const REG_INSTAGRAM = /^[a-zA-Z0-9_.]{0,30}/i;
    return REG_INSTAGRAM.test(instagram.toLowerCase());
  }
}
