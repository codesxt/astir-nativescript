"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var calendar_modal_1 = require("../calendar-modal/calendar.modal");
var EventDetailsComponent = (function () {
    function EventDetailsComponent(routerExtensions, route, modal, vcRef) {
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.modal = modal;
        this.vcRef = vcRef;
        this.text = 'Detalles del Evento';
        this.event = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RixtRUFBNkU7QUFDN0Usc0RBQStEO0FBQy9ELDBDQUFpRDtBQUdqRCxtRUFBMEU7QUFRMUUsSUFBYSxxQkFBcUI7SUFJOUIsK0JBQ1UsZ0JBQWtDLEVBQ2xDLEtBQXFCLEVBQ3JCLEtBQXlCLEVBQ3pCLEtBQXVCO1FBSHZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFQakMsU0FBSSxHQUFXLHFCQUFxQixDQUFDO1FBQ3JDLFVBQUssR0FBVSxJQUFJLENBQUM7SUFRcEIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDckMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFDRSxJQUFJLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRTtnQkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDdEI7WUFDRCxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsdUNBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztRQUU5RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1kscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNsRCxDQUFDO3FDQU04Qix5QkFBZ0I7UUFDM0IsdUJBQWM7UUFDZCw0QkFBa0I7UUFDbEIsdUJBQWdCO0dBUnhCLHFCQUFxQixDQWtDakM7QUFsQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2V2ZW50L2V2ZW50XCI7XG5cbmltcG9ydCB7IENhbGVuZGFyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vY2FsZW5kYXItbW9kYWwvY2FsZW5kYXIubW9kYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudC1kZXRhaWxzJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRleHQ6IHN0cmluZyA9ICdEZXRhbGxlcyBkZWwgRXZlbnRvJztcbiAgICBldmVudDogRXZlbnQgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5ldmVudCA9IEpTT04ucGFyc2UocGFyYW1zW1wiZXZlbnRcIl0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG5cbiAgICBhZGRUb0NhbGVuZGFyKCl7XG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGV2ZW50RGF0YTogdGhpcy5ldmVudFxuICAgICAgICB9LFxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgfTtcbiAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKENhbGVuZGFyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcblxuICAgICAgfSk7XG4gICAgfVxufVxuIl19