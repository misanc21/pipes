import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {
    if(activar){
      return value.split('').map(e=> e = '*').join('');
    }else{
      return value
    }
  }

}
