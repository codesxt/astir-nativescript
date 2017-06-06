import { Component, ChangeDetectionStrategy, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from "@angular/router";
import { Event } from "../../shared/event/event";
import { Directions } from "nativescript-directions";

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
    directions: any;
    constructor(
      private routerExtensions: RouterExtensions,
      private route: ActivatedRoute,
      private modal: ModalDialogService,
      private vcRef: ViewContainerRef
    ) {
      this.directions = new Directions();
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

    openInMap(){
      this.directions.available().then((avail) => {
        if(!avail){
          alert({
            title: "Error",
            message: "No hay una aplicación de mapas disponible.",
            okButtonText: "Entendido"
          });
        }else{
          let destination = null;
          if(!this.event.where.location){
            destination = {
              address: this.event.where.address
            }
          }else{
            destination = {
              lat: this.event.where.location.coordinates[1],
              lng: this.event.where.location.coordinates[0]
            }
          }
          this.directions.navigate({
            to: destination
          }).then(() => {
              console.log("Maps app launched.");
          }, (error) => {
              console.log(error);
              alert({
                title: "Error",
                message: "Ocurrió un error al abrir la aplicación de mapas.",
                okButtonText: "Entendido"
              })
          });
        }
      });
    }
}
