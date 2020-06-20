/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'differenceTime',
})
export class DifferenceTimePipe implements PipeTransform {
  constructor(private elementRef: ElementRef) {}

  transform(date: Date): string {
    const current: Date = new Date();
    const pipeDate: Date = new Date(date);

    let diffSeconds: number = (pipeDate.getTime() - current.getTime()) / 1000;

    const days = Math.floor(diffSeconds / (3600 * 24));
    diffSeconds -= days * 3600 * 24;

    let hours: any = Math.floor(diffSeconds / 3600);

    diffSeconds %= 3600;
    let minutes: any = Math.floor(diffSeconds / 60);
    let dayLegend = days > 1 ? 'dias' : 'dia';

    const hourLegend = hours > 1 ? 'horas' : 'hora';
    const minLegend = minutes > 1 ? 'minutos' : 'minuto';

    dayLegend = `${days} ${dayLegend}`;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeLegend = `${hours} ${hourLegend} e ${minutes} ${minLegend}`;

    return `${dayLegend} ${timeLegend}`;
  }
}
