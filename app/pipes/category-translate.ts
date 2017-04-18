import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'categoryTranslate',
  pure: false
})
export class CategoryTranslatePipe implements PipeTransform {
  transform(str: string) {
    switch(str){
      case 'music':{
        return 'Música'
      }default:{
        return str;
      }
    }
  }
}
