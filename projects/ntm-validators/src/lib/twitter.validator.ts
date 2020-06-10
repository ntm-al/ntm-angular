import { FormControl } from '@angular/forms';

export class ValidateTwitter {
  static valid(control: FormControl) {
    if (!control.value) return null;
    if(ValidateTwitter.valid_twitter(control.value)){
      return null;
    }
    return {
      validateTwitter: {
        valid: false
      }
    }
  }
  static valid_twitter(twitter) {
    const REG_TWITTER = /^[a-zA-Z0-9_]{0,15}/i;
    return REG_TWITTER.test(twitter.toLowerCase());
  }
}
