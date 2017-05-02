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
        templateUrl: './event-details.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        router_2.ActivatedRoute])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxzREFBK0Q7QUFDL0QsMENBQWlEO0FBUWpELElBQWEscUJBQXFCO0lBRzlCLCtCQUNVLGdCQUFrQyxFQUNsQyxLQUFxQjtRQURyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSi9CLFNBQUksR0FBVyxxQkFBcUIsQ0FBQztRQUNyQyxVQUFLLEdBQVUsSUFBSSxDQUFDO0lBTXBCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlkscUJBQXFCO0lBTGpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2xELENBQUM7cUNBSzhCLHlCQUFnQjtRQUMzQix1QkFBYztHQUx0QixxQkFBcUIsQ0FtQmpDO0FBbkJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ldmVudC9ldmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2ZW50LWRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRleHQ6IHN0cmluZyA9ICdEZXRhbGxlcyBkZWwgRXZlbnRvJztcbiAgICBldmVudDogRXZlbnQgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50ID0gSlNPTi5wYXJzZShwYXJhbXNbXCJldmVudFwiXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbn1cbiJdfQ==