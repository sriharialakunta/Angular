import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  standalone: true,
})
export class SumPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let total: number = 0;
    for (let val of value) total += val;
    return total;
  }
}
