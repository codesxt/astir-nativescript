import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  text: string = 'Acerca de Astir';
  description: string = 'El proyecto Astir nació por la necesidad de reunir '+
    'en un mismo lugar la información de los eventos culturales que hay en Talca. '+
    'Actualmente son distintas las entidades que desarrollan actividades culturales '+
    'y, por lo mismo, la gente no se informa de las actividades que ocurren en su entorno. '+
    'Con Astir se busca crear una plataforma en la que toda la información sobre '+
    'eventos esté en un mismo lugar y así llevar la cultura a mucha más gente.';
}
