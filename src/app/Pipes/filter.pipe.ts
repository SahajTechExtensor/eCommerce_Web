import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(product: any[], byCategory: string) {
    if (byCategory === 'All') {
      return product
    }
    else {
      return product.filter(data => {
        return data.category === byCategory
      });
    }
  }
}
