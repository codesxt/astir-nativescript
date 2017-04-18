import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Event } from "../../shared/event/event";
import { EventListService } from "../../shared/event/event-list.service";

import { RouterExtensions } from 'nativescript-angular/router';

import * as moment from "moment";
moment.locale('es');

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [EventListService]
})
export class HomeComponent implements OnInit {
  title: string = 'Eventos';
  eventList: Array<Event> = [];
  constructor(
    private eventListService: EventListService,
    private routerExtensions: RouterExtensions
  ) {}

  showDetails(e){
    let event = this.eventList[e.index];
    //alert("Estás tocando el evento:\n"+JSON.stringify(event));
    this.routerExtensions.navigate(["/event-details"],
      {
        clearHistory: false,
        animated: false,
        queryParams: {
          event: JSON.stringify(event)
        }
      });
  }

  ngOnInit(){
    this.eventListService.load()
    .subscribe(loadedEvents => {
      loadedEvents.forEach((eventObject) => {
        this.eventList.unshift(eventObject);
      });
    });
  }
}
