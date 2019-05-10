import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageConverter'
})
export class AgeConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let birthdate = new Date(value);
    let datenow = new Date();
    return datenow.getFullYear() - birthdate.getFullYear();

  }

}
