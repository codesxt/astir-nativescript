import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Event } from "./event";

@Injectable()
export class EventListService {
  constructor(private http: Http) {}

  load() {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);

    return this.http.get(Config.apiUrl + "events", {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      let eventList = [];
      data.forEach((event) => {
        eventList.push(new Event(
          event.id,
          event.title,
          event.category,
          event.description,
          event.when,
          event.where,
          event.cost)
        );
      });
      return eventList;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
