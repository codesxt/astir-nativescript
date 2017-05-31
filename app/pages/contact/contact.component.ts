import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'contact',
    moduleId: module.id,
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    text: string = 'Contacto';
    description: string = 'Actualmente el proyecto es desarrollado por un gran '+
      'equipo de trabajo... Mentira, jaja. El proyecto es una iniciativa personal. '+
      'Soy Bruno Faúndez Valenzuela, y si quieres enviarme tus comentarios puedes '+
      'escribirme a brunofaundezv@gmail.com. Gracias por usar Astir :)';
}
