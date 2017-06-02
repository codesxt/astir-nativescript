import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ListPicker } from "ui/list-picker";
import * as Calendar from "nativescript-calendar";

@Component({
    selector: "calendar-modal",
    moduleId: module.id,
    templateUrl: "calendar.modal.html",
})
export class CalendarModalComponent {
    calendarNames: String[] = [];
    options: any = {};
    eventData: any = {};
    public constructor(
      private params: ModalDialogParams
    ) {
      this.eventData = this.params.context.eventData;

      Calendar.listCalendars().then(
        (calendars)=>{
          for(let c of calendars){
            this.calendarNames.push(c.name);
          }
        },(error)=>{
          console.log("Error finding Calendars: " + error);
        }
      );

      this.options = {
        title: this.eventData.title,
        startDate: new Date(this.eventData.when.start),
        endDate: new Date(this.eventData.when.finish)
      }

      this.options.calendar = {
        name: this.calendarNames[0],
        color: "#AA0000",
        accountName: "Astir"
      }

      this.options.notes = "(Evento añadido desde Astir.)"+"\n\n"+this.eventData.description;
      /*
      console.log(Object.getOwnPropertyNames(Calendar).filter(function (p) {
        return typeof Calendar[p] === 'function';
      }));*/
    }

    public addEvent(){
      let successText = "Se añadió exitosamente el evento: "+this.options.title;
      Calendar.createEvent(this.options).then(
        function(createdId) {
          console.log("Created Event with ID: " + createdId);
          alert({
            title: "Evento creado",
            message: successText,
            okButtonText: "OK"
          })
        },
        function(error) {
          console.log("Error creating an Event: " + error);
          alert({
            title: "Error",
            message: "Se ha producido un error registrando el evento",
            okButtonText: "OK"
          })
        }
      );
      this.close();
    }

    public selectedIndexChanged(args) {
      let picker = <ListPicker>args.object;
      //console.log("picker selection: " + picker.selectedIndex);
      let selectedName = this.calendarNames[picker.selectedIndex];
      this.options.calendar.name = selectedName;
      //this.picked = this.pokemons[picker.selectedIndex];
    }

    public close() {
      let result = {
        message: "SUCC"
      }
      this.params.closeCallback(result);
    }
}
