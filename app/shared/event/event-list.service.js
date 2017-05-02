"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var event_1 = require("./event");
var EventListService = (function () {
    function EventListService(http) {
        this.http = http;
    }
    EventListService.prototype.load = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "events", {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var eventList = [];
            data.forEach(function (event) {
                eventList.push(new event_1.Event(event.id, event.title, event.category, event.description, event.when, event.where, event.cost));
            });
            return eventList;
        })
            .catch(this.handleErrors);
    };
    EventListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return EventListService;
}());
EventListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventListService);
exports.EventListService = EventListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnQtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG9DQUFtQztBQUNuQyxpQ0FBZ0M7QUFHaEMsSUFBYSxnQkFBZ0I7SUFDM0IsMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQywrQkFBSSxHQUFKO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRTtZQUM3QyxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksYUFBSyxDQUN0QixLQUFLLENBQUMsRUFBRSxFQUNSLEtBQUssQ0FBQyxLQUFLLEVBQ1gsS0FBSyxDQUFDLFFBQVEsRUFDZCxLQUFLLENBQUMsV0FBVyxFQUNqQixLQUFLLENBQUMsSUFBSSxFQUNWLEtBQUssQ0FBQyxLQUFLLEVBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUNaLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLGdCQUFnQixDQWlDNUI7QUFqQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4vZXZlbnRcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQ29uZmlnLnRva2VuKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcImV2ZW50c1wiLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfSlcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICBsZXQgZXZlbnRMaXN0ID0gW107XG4gICAgICBkYXRhLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50TGlzdC5wdXNoKG5ldyBFdmVudChcbiAgICAgICAgICBldmVudC5pZCxcbiAgICAgICAgICBldmVudC50aXRsZSxcbiAgICAgICAgICBldmVudC5jYXRlZ29yeSxcbiAgICAgICAgICBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBldmVudC53aGVuLFxuICAgICAgICAgIGV2ZW50LndoZXJlLFxuICAgICAgICAgIGV2ZW50LmNvc3QpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBldmVudExpc3Q7XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufVxuIl19