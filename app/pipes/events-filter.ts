import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventsFilter',
  pure: false
})
export class EventsFilterPipe implements PipeTransform{
  transform(events: any[], params: any) {
    let searchText = ((params[0] != "") ? params[0] : "");
    let category = ((params[1] != "") ? params[1] : "any");
    if(searchText == null) { return events; }
    let query = searchText.toLowerCase();

    return events.filter(event =>
        (event.title.toLowerCase().indexOf(query) > -1) &&
        (event.category == category || category == "any")

    );
  }
}
