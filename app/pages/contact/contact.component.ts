import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    text: string = 'Página de Contacto';
}
