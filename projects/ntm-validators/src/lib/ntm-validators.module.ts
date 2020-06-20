import { NgModule } from '@angular/core';
import { NtmValidatorsComponent } from './ntm-validators.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { InstagramMaskDirective } from './directives/instagram-mask.directive';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { TwitterMaskDirective } from './directives/twitter-mask.directive';
import { DifferenceTimePipe } from './pipes/difference-time.pipe';
import { NumberToMonthPipe } from './pipes/number-to-month.pipe';
import { FirstAndLastNamePipe } from './pipes/first-and-last-name.pipe';

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
  ],
})
export class NtmValidatorsModule {}
