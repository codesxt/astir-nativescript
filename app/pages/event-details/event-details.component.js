"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var EventDetailsComponent = (function () {
    function EventDetailsComponent(routerExtensions, route) {
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.text = 'Detalles del Evento';
        this.event = null;
        /*
        Calendar.listCalendars().then(
          function(calendars) {
            console.log(JSON.stringify(calendars));
          },
          function(error) {
            console.log("Error finding Calendars: " + error);
          }
        );
        */
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.event = JSON.parse(params["event"]);
        });
    };
    EventDetailsComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    return EventDetailsComponent;
}());
EventDetailsComponent = __decorate([
    core_1.Component({
        selector: 'event-details',
        moduleId: module.id,
        templateUrl: './event-details.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        router_2.ActivatedRoute])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxzREFBK0Q7QUFDL0QsMENBQWlEO0FBVWpELElBQWEscUJBQXFCO0lBRzlCLCtCQUNVLGdCQUFrQyxFQUNsQyxLQUFxQjtRQURyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSi9CLFNBQUksR0FBVyxxQkFBcUIsQ0FBQztRQUNyQyxVQUFLLEdBQVUsSUFBSSxDQUFDO1FBS2xCOzs7Ozs7Ozs7VUFTRTtJQUNKLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlkscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNsRCxDQUFDO3FDQUs4Qix5QkFBZ0I7UUFDM0IsdUJBQWM7R0FMdEIscUJBQXFCLENBNEJqQztBQTVCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZXZlbnQvZXZlbnRcIjtcbmltcG9ydCAqIGFzIENhbGVuZGFyIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FsZW5kYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudC1kZXRhaWxzJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRleHQ6IHN0cmluZyA9ICdEZXRhbGxlcyBkZWwgRXZlbnRvJztcbiAgICBldmVudDogRXZlbnQgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICAgIC8qXG4gICAgICBDYWxlbmRhci5saXN0Q2FsZW5kYXJzKCkudGhlbihcbiAgICAgICAgZnVuY3Rpb24oY2FsZW5kYXJzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2FsZW5kYXJzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmaW5kaW5nIENhbGVuZGFyczogXCIgKyBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICAqL1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50ID0gSlNPTi5wYXJzZShwYXJhbXNbXCJldmVudFwiXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbn1cbiJdfQ==