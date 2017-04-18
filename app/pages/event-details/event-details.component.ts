import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from "@angular/router";
import { Event } from "../../shared/event/event";

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDetailsComponent implements OnInit {
    text: string = 'Detalles del Evento';
    event: Event = null;
    constructor(
      private routerExtensions: RouterExtensions,
      private route: ActivatedRoute
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
}
