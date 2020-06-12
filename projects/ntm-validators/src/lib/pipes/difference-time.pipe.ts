import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'differenceTime',
})
export class DifferenceTimePipe implements PipeTransform {
  constructor(private elementRef: ElementRef) {}

  transform(date) {
    const current: Date = new Date();
    const pipeDate: Date = new Date(date);
    let diff_seconds: number = (pipeDate.getTime() - current.getTime()) / 1000;
    const days = Math.floor(diff_seconds / (3600 * 24));
    diff_seconds -= days * 3600 * 24;
    let hours: any = Math.floor(diff_seconds / 3600);
    diff_seconds %= 3600;
    let minutes: any = Math.floor(diff_seconds / 60);
    let day_legend = days > 1 ? 'dias' : 'dia';
    const hour_legend = hours > 1 ? 'horas' : 'hora';
    const min_legend = minutes > 1 ? 'minutos' : 'minuto';
    day_legend = `${days} ${day_legend}`;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const time_legend = `${hours} ${hour_legend} e ${minutes} ${min_legend}`;
    return `${day_legend} ${time_legend}`;
  }
}
