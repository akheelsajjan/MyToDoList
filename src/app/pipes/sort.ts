import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class sortvalue implements PipeTransform {

  transform(value: any,orderType:boolean, items?: any): any {
    console.log(value);

    return value.sort((a, b) => b.issueName-a.issueName);
  }

}