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
            data.data.forEach(function (event) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnQtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG9DQUFtQztBQUNuQyxpQ0FBZ0M7QUFHaEMsSUFBYSxnQkFBZ0I7SUFDM0IsMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQywrQkFBSSxHQUFKO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRTtZQUM3QyxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQUssQ0FDdEIsS0FBSyxDQUFDLEVBQUUsRUFDUixLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxRQUFRLEVBQ2QsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLElBQUksRUFDVixLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDWixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBRWUsV0FBSTtHQURuQixnQkFBZ0IsQ0FpQzVCO0FBakNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL2V2ZW50XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdmVudExpc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIGxvYWQoKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIENvbmZpZy50b2tlbik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCJldmVudHNcIiwge1xuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgbGV0IGV2ZW50TGlzdCA9IFtdO1xuICAgICAgZGF0YS5kYXRhLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50TGlzdC5wdXNoKG5ldyBFdmVudChcbiAgICAgICAgICBldmVudC5pZCxcbiAgICAgICAgICBldmVudC50aXRsZSxcbiAgICAgICAgICBldmVudC5jYXRlZ29yeSxcbiAgICAgICAgICBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBldmVudC53aGVuLFxuICAgICAgICAgIGV2ZW50LndoZXJlLFxuICAgICAgICAgIGV2ZW50LmNvc3QpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBldmVudExpc3Q7XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufVxuIl19