import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stringFormat',
  pure: false
})
export class StringFormatPipe implements PipeTransform {
  transform(str: string, mode: string) {
    if( mode == null){
      return str;
    };
    switch(mode){
      case 'capitalizeFirst':{
        return str.charAt(0).toUpperCase() + str.slice(1);
      }default:{
        return str;
      }
    }
  }
}
