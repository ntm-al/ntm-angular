import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { InstagramMaskDirective } from './directives/instagram-mask.directive';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { TwitterMaskDirective } from './directives/twitter-mask.directive';
import { DifferenceTimePipe } from './pipes/difference-time.pipe';
import { NumberToMonthPipe } from './pipes/number-to-month.pipe';
import { FirstAndLastNamePipe } from './pipes/first-and-last-name.pipe';
import { ZipCodeMaskDirective } from './directives/zip-code-mask.directive';
import { OnlyNumbersDirective } from './directives/only-number.directive';

@NgModule({
  declarations: [
    CoreComponent,
    CpfMaskDirective,
    InstagramMaskDirective,
    PhoneMaskDirective,
    TwitterMaskDirective,
    DifferenceTimePipe,
    FirstAndLastNamePipe,
    NumberToMonthPipe,
    ZipCodeMaskDirective,
    OnlyNumbersDirective,
  ],
  imports: [],
  exports: [
    CoreComponent,
    CpfMaskDirective,
    InstagramMaskDirective,
    PhoneMaskDirective,
    TwitterMaskDirective,
    DifferenceTimePipe,
    FirstAndLastNamePipe,
    NumberToMonthPipe,
    ZipCodeMaskDirective,
    OnlyNumbersDirective,
  ],
})
export class CoreModule {}
