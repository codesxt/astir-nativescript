"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Observable, EventData } from 'data/observable';
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var event_list_service_1 = require("../../shared/event/event-list.service");
var event_filter_modal_1 = require("../event-filter/event-filter.modal");
var moment = require("moment");
moment.locale('es');
var HomeComponent = (function () {
    function HomeComponent(eventListService, routerExtensions, modal, vcRef) {
        this.eventListService = eventListService;
        this.routerExtensions = routerExtensions;
        this.modal = modal;
        this.vcRef = vcRef;
        this.title = 'Eventos';
        this.eventList = [];
        this.isLoading = false;
        this.listLoaded = false;
        this.filter = {
            searchText: "",
            category: "any"
        };
        this.iconSearch = String.fromCharCode(0xf002);
    }
    HomeComponent.prototype.showDetails = function (e) {
        var event = this.eventList[e.index];
        this.routerExtensions.navigate(["/event-details"], {
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
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.eventListService.load()
            .subscribe(function (loadedEvents) {
            loadedEvents.forEach(function (eventObject) {
                _this.eventList.unshift(eventObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    HomeComponent.prototype.openFilter = function (args) {
        var _this = this;
        console.log("Opening Filter...");
        var options = {
            context: {
                filter: this.filter
            },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(event_filter_modal_1.EventFilterModalComponent, options).then(function (res) {
            _this.filter = res;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        moduleId: module.id,
        templateUrl: './home.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.Default,
        providers: [event_list_service_1.EventListService]
    }),
    __metadata("design:paramtypes", [event_list_service_1.EventListService,
        router_1.RouterExtensions,
        dialogs_1.ModalDialogService,
        core_1.ViewContainerRef])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RiwwREFBMEQ7QUFDMUQsbUVBQTZFO0FBQzdFLHNEQUErRDtBQUUvRCw0RUFBeUU7QUFDekUseUVBQStFO0FBRy9FLCtCQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBU3BCLElBQWEsYUFBYTtJQVV4Qix1QkFDVSxnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLEtBQXlCLEVBQ3pCLEtBQXVCO1FBSHZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWJqQyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQUc7WUFDUCxVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUE7UUFDRCxlQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQU10QyxDQUFDO0lBRUosbUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFDL0M7WUFDRSxZQUFZLEVBQUUsS0FBSztZQUNuQixVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsWUFBWTtZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsV0FBVztnQkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUFwQixpQkFZQztRQVhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEI7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsOENBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUMvRCxLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExRFksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE9BQU87UUFDaEQsU0FBUyxFQUFFLENBQUMscUNBQWdCLENBQUM7S0FDOUIsQ0FBQztxQ0FZNEIscUNBQWdCO1FBQ2hCLHlCQUFnQjtRQUMzQiw0QkFBa0I7UUFDbEIsdUJBQWdCO0dBZHRCLGFBQWEsQ0EwRHpCO0FBMURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ldmVudC9ldmVudFwiO1xuaW1wb3J0IHsgRXZlbnRMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZXZlbnQvZXZlbnQtbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFdmVudEZpbHRlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXZlbnQtZmlsdGVyL2V2ZW50LWZpbHRlci5tb2RhbCc7XG5cblxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbm1vbWVudC5sb2NhbGUoJ2VzJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvbWUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgcHJvdmlkZXJzOiBbRXZlbnRMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlOiBzdHJpbmcgPSAnRXZlbnRvcyc7XG4gIGV2ZW50TGlzdDogQXJyYXk8RXZlbnQ+ID0gW107XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG4gIGZpbHRlciA9IHtcbiAgICBzZWFyY2hUZXh0OiBcIlwiLFxuICAgIGNhdGVnb3J5OiBcImFueVwiXG4gIH1cbiAgaWNvblNlYXJjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDAyKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudExpc3RTZXJ2aWNlOiBFdmVudExpc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgc2hvd0RldGFpbHMoZSl7XG4gICAgbGV0IGV2ZW50ID0gdGhpcy5ldmVudExpc3RbZS5pbmRleF07XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ldmVudC1kZXRhaWxzXCJdLFxuICAgICAge1xuICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgfSxcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICBldmVudDogSlNPTi5zdHJpbmdpZnkoZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5ldmVudExpc3RTZXJ2aWNlLmxvYWQoKVxuICAgIC5zdWJzY3JpYmUobG9hZGVkRXZlbnRzID0+IHtcbiAgICAgIGxvYWRlZEV2ZW50cy5mb3JFYWNoKChldmVudE9iamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50TGlzdC51bnNoaWZ0KGV2ZW50T2JqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRmlsdGVyKGFyZ3M6IGFueSl7XG4gICAgY29uc29sZS5sb2coXCJPcGVuaW5nIEZpbHRlci4uLlwiKTtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgICAgfSxcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChFdmVudEZpbHRlck1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLmZpbHRlciA9IHJlcztcbiAgICB9KTtcbiAgfVxufVxuIl19