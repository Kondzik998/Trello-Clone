import { Pipe, PipeTransform } from '@angular/core';

const MAX_SHORT_DESCRIPTION_VALUE: number = 25;

@Pipe({
  name: 'shortDescription',
})
export class ShortDescriptionPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length === 0) return 'No description.';
    if (value.length > MAX_SHORT_DESCRIPTION_VALUE)
      return `${value.slice(0, MAX_SHORT_DESCRIPTION_VALUE)}...`;
    return value;
  }
}
