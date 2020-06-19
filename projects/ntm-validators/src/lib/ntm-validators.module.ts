import { NgModule } from '@angular/core';
import { NtmValidatorsComponent } from './ntm-validators.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { InstagramMaskDirective } from './directives/instagram-mask.directive';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { TwitterMaskDirective } from './directives/twitter-mask.directive';

@NgModule({
  declarations: [
    NtmValidatorsComponent,
    CpfMaskDirective,
    InstagramMaskDirective,
    PhoneMaskDirective,
    TwitterMaskDirective,
  ],
  imports: [],
  exports: [
    NtmValidatorsComponent,
    CpfMaskDirective,
    InstagramMaskDirective,
    PhoneMaskDirective,
    TwitterMaskDirective,
  ],
})
export class NtmValidatorsModule {}
