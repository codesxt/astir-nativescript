import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'categoryTranslate',
  pure: false
})
export class CategoryTranslatePipe implements PipeTransform {
  categories = [
    {value: "music", name: "Música"},
    {value: "theatre", name: "Teatro"},
    {value: "opera", name: "Ópera"},
    {value: "exposition", name: "Exposición"},
    {value: "festival", name: "Festival"},
    {value: "fair", name: "Feria"},
    {value: "talk", name: "Charla"},
    {value: "movie", name: "Cine"},
    {value: "outdoors", name: "Aire Libre"}
  ];
  transform(str: string) {
    for (let cat of this.categories) {
      if(cat.value == str) return cat.name;
    }
    return str;
  }
}
