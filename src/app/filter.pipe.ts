import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Content[], type?: string): Content[] {

    return value.filter(c => {
      if (type) {
        return c.type == type;
      } else { 
        return !c.type;
      }
    });
  }

}
