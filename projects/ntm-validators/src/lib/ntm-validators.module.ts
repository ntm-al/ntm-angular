import { NgModule } from '@angular/core';
import { NtmValidatorsComponent } from './ntm-validators.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { InstagramMaskDirective } from './directives/instagram-mask.directive';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { TwitterMaskDirective } from './directives/twitter-mask.directive';
import { DifferenceTimePipe } from './pipes/difference-time.pipe';
import { NumberToMonthPipe } from './pipes/number-to-month.pipe';
import { FirstAndLastNamePipe } from './pipes/first-and-last-name.pipe';
import { ZipCodeMaskDirective } from './directives/zip-code-mask.directive';

@NgModule({
  declarations: [
    NtmValidatorsComponent,
    CpfMaskDirective,
    InstagramMaskDirective,
    PhoneMaskDirective,
    TwitterMaskDirective,
    DifferenceTimePipe,
    FirstAndLastNamePipe,
    NumberToMonthPipe,
    ZipCodeMaskDirective,
  ],
  imports: [],
  exports: [
    NtmValidatorsComponent,
    CpfMaskDirective,
    InstagramMaskDirective,
    PhoneMaskDirective,
    TwitterMaskDirective,
    DifferenceTimePipe,
    FirstAndLastNamePipe,
    NumberToMonthPipe,
    ZipCodeMaskDirective,
  ],
})
export class NtmValidatorsModule {}
