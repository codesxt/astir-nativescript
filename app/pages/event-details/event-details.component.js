"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var nativescript_directions_1 = require("nativescript-directions");
var calendar_modal_1 = require("../calendar-modal/calendar.modal");
var EventDetailsComponent = (function () {
    function EventDetailsComponent(routerExtensions, route, modal, vcRef) {
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.modal = modal;
        this.vcRef = vcRef;
        this.text = 'Detalles del Evento';
        this.event = null;
        this.directions = new nativescript_directions_1.Directions();
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
    EventDetailsComponent.prototype.addToCalendar = function () {
        var options = {
            context: {
                eventData: this.event
            },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(calendar_modal_1.CalendarModalComponent, options).then(function (res) {
        });
    };
    EventDetailsComponent.prototype.openInMap = function () {
        var _this = this;
        this.directions.available().then(function (avail) {
            if (!avail) {
                alert({
                    title: "Error",
                    message: "No hay una aplicación de mapas disponible.",
                    okButtonText: "Entendido"
                });
            }
            else {
                var destination = null;
                if (!_this.event.where.location) {
                    destination = {
                        address: _this.event.where.address
                    };
                }
                else {
                    destination = {
                        lat: _this.event.where.location.coordinates[1],
                        lng: _this.event.where.location.coordinates[0]
                    };
                }
                _this.directions.navigate({
                    to: destination
                }).then(function () {
                    console.log("Maps app launched.");
                }, function (error) {
                    console.log(error);
                    alert({
                        title: "Error",
                        message: "Ocurrió un error al abrir la aplicación de mapas.",
                        okButtonText: "Entendido"
                    });
                });
            }
        });
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
        router_2.ActivatedRoute,
        dialogs_1.ModalDialogService,
        core_1.ViewContainerRef])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RixtRUFBNkU7QUFDN0Usc0RBQStEO0FBQy9ELDBDQUFpRDtBQUVqRCxtRUFBcUQ7QUFFckQsbUVBQTBFO0FBUTFFLElBQWEscUJBQXFCO0lBSTlCLCtCQUNVLGdCQUFrQyxFQUNsQyxLQUFxQixFQUNyQixLQUF5QixFQUN6QixLQUF1QjtRQUh2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBUGpDLFNBQUksR0FBVyxxQkFBcUIsQ0FBQztRQUNyQyxVQUFLLEdBQVUsSUFBSSxDQUFDO1FBUWxCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQ0FBVSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDckMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFDRSxJQUFJLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRTtnQkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDdEI7WUFDRCxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsdUNBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztRQUU5RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQUEsaUJBa0NDO1FBakNDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUNyQyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ1QsS0FBSyxDQUFDO29CQUNKLEtBQUssRUFBRSxPQUFPO29CQUNkLE9BQU8sRUFBRSw0Q0FBNEM7b0JBQ3JELFlBQVksRUFBRSxXQUFXO2lCQUMxQixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7b0JBQzdCLFdBQVcsR0FBRzt3QkFDWixPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTztxQkFDbEMsQ0FBQTtnQkFDSCxDQUFDO2dCQUFBLElBQUksQ0FBQSxDQUFDO29CQUNKLFdBQVcsR0FBRzt3QkFDWixHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzdDLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztxQkFDOUMsQ0FBQTtnQkFDSCxDQUFDO2dCQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO29CQUN2QixFQUFFLEVBQUUsV0FBVztpQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3RDLENBQUMsRUFBRSxVQUFDLEtBQUs7b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkIsS0FBSyxDQUFDO3dCQUNKLEtBQUssRUFBRSxPQUFPO3dCQUNkLE9BQU8sRUFBRSxtREFBbUQ7d0JBQzVELFlBQVksRUFBRSxXQUFXO3FCQUMxQixDQUFDLENBQUE7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBdkVELElBdUVDO0FBdkVZLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDbEQsQ0FBQztxQ0FNOEIseUJBQWdCO1FBQzNCLHVCQUFjO1FBQ2QsNEJBQWtCO1FBQ2xCLHVCQUFnQjtHQVJ4QixxQkFBcUIsQ0F1RWpDO0FBdkVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ldmVudC9ldmVudFwiO1xuaW1wb3J0IHsgRGlyZWN0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiO1xuXG5pbXBvcnQgeyBDYWxlbmRhck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NhbGVuZGFyLW1vZGFsL2NhbGVuZGFyLm1vZGFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZlbnQtZGV0YWlscycsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXZlbnQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnREZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB0ZXh0OiBzdHJpbmcgPSAnRGV0YWxsZXMgZGVsIEV2ZW50byc7XG4gICAgZXZlbnQ6IEV2ZW50ID0gbnVsbDtcbiAgICBkaXJlY3Rpb25zOiBhbnk7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICApIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBKU09OLnBhcnNlKHBhcmFtc1tcImV2ZW50XCJdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvQmFjaygpIHtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuXG4gICAgYWRkVG9DYWxlbmRhcigpe1xuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBldmVudERhdGE6IHRoaXMuZXZlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgIH07XG4gICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChDYWxlbmRhck1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5Jbk1hcCgpe1xuICAgICAgdGhpcy5kaXJlY3Rpb25zLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsKSA9PiB7XG4gICAgICAgIGlmKCFhdmFpbCl7XG4gICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gaGF5IHVuYSBhcGxpY2FjacOzbiBkZSBtYXBhcyBkaXNwb25pYmxlLlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkVudGVuZGlkb1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGxldCBkZXN0aW5hdGlvbiA9IG51bGw7XG4gICAgICAgICAgaWYoIXRoaXMuZXZlbnQud2hlcmUubG9jYXRpb24pe1xuICAgICAgICAgICAgZGVzdGluYXRpb24gPSB7XG4gICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuZXZlbnQud2hlcmUuYWRkcmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGVzdGluYXRpb24gPSB7XG4gICAgICAgICAgICAgIGxhdDogdGhpcy5ldmVudC53aGVyZS5sb2NhdGlvbi5jb29yZGluYXRlc1sxXSxcbiAgICAgICAgICAgICAgbG5nOiB0aGlzLmV2ZW50LndoZXJlLmxvY2F0aW9uLmNvb3JkaW5hdGVzWzBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICB0bzogZGVzdGluYXRpb25cbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJPY3VycmnDsyB1biBlcnJvciBhbCBhYnJpciBsYSBhcGxpY2FjacOzbiBkZSBtYXBhcy5cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiRW50ZW5kaWRvXCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxufVxuIl19