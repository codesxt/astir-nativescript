import { Component, ChangeDetectionStrategy, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from "@angular/router";
import { Event } from "../../shared/event/event";

import { CalendarModalComponent } from "../calendar-modal/calendar.modal";

@Component({
    selector: 'event-details',
    moduleId: module.id,
    templateUrl: './event-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDetailsComponent implements OnInit {
    text: string = 'Detalles del Evento';
    event: Event = null;

    constructor(
      private routerExtensions: RouterExtensions,
      private route: ActivatedRoute,
      private modal: ModalDialogService,
      private vcRef: ViewContainerRef
    ) {
    }

    ngOnInit(){
      this.route.queryParams.subscribe(params => {
        this.event = JSON.parse(params["event"]);
      });
    }

    goBack() {
      this.routerExtensions.back();
    }

    addToCalendar(){
      let options = {
        context: {
          eventData: this.event
        },
        fullscreen: false,
        viewContainerRef: this.vcRef
      };
      this.modal.showModal(CalendarModalComponent, options).then(res => {

      });
    }
}
