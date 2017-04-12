import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Event } from "../../shared/event/event";
import { EventListService } from "../../shared/event/event-list.service";

import * as moment from "moment";
moment.locale('es');

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventListService]
})
export class HomeComponent implements OnInit {
  title: string = 'Eventos';
  eventList: Array<Event> = [];
  constructor(
    private eventListService: EventListService
  ) {}

  ngOnInit(){
    alert(moment().format('dddd'));
    this.eventListService.load()
    .subscribe(loadedEvents => {
      loadedEvents.forEach((eventObject) => {
        this.eventList.unshift(eventObject);
      });
    });
  }
}
