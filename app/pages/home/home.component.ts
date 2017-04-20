import { Component, ChangeDetectionStrategy, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, EventData } from 'data/observable';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { Event } from "../../shared/event/event";
import { EventListService } from "../../shared/event/event-list.service";
import { EventFilterModalComponent } from '../event-filter/event-filter.modal';


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
  isLoading = false;
  listLoaded = false;
  filter = {
    searchText: "",
    category: "any"
  }
  iconSearch = String.fromCharCode(0xf002);
  constructor(
    private eventListService: EventListService,
    private routerExtensions: RouterExtensions,
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef
  ) {}

  showDetails(e){
    let event = this.eventList[e.index];
    this.routerExtensions.navigate(["/event-details"],
      {
        clearHistory: false,
        transition: {
            name: "slide",
            duration: 500,
            curve: "linear"
        },
        queryParams: {
          event: JSON.stringify(event)
        }
      });
  }

  ngOnInit(){
    this.isLoading = true;
    this.eventListService.load()
    .subscribe(loadedEvents => {
      loadedEvents.forEach((eventObject) => {
        this.eventList.unshift(eventObject);
      });
      this.isLoading = false;
      this.listLoaded = true;
    });
  }

  openFilter(args: EventData){
    console.log("Opening Filter...");
    let options = {
      context: {
        filter: this.filter
      },
      fullscreen: true,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(EventFilterModalComponent, options).then(res => {
      this.filter = res;
    });
  }
}
