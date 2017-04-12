import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  text: string = 'Acerca de esta aplicación';
  description: string = 'Esta aplicación usa la plantilla: nativescript-angular-drawer-template.' +
   'Para instalar: tns create my-project-name --template nativescript-angular-drawer-template';
}
