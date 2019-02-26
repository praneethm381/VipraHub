import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure: false
})
export class FilterpipePipe implements PipeTransform {

  transform(items: any, filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(value => value.title.indexOf(filter) !== -1);
  }

}
