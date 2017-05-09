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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RiwwREFBMEQ7QUFDMUQsbUVBQTZFO0FBQzdFLHNEQUErRDtBQUUvRCw0RUFBeUU7QUFDekUseUVBQStFO0FBRy9FLCtCQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBUXBCLElBQWEsYUFBYTtJQVV4Qix1QkFDVSxnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLEtBQXlCLEVBQ3pCLEtBQXVCO1FBSHZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWJqQyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQUc7WUFDUCxVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUE7UUFDRCxlQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQU10QyxDQUFDO0lBRUosbUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFDL0M7WUFDRSxZQUFZLEVBQUUsS0FBSztZQUNuQixVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzdCO1NBQ0YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsWUFBWTtZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsV0FBVztnQkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUFwQixpQkFZQztRQVhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEI7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsOENBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUMvRCxLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExRFksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsT0FBTztRQUNoRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztLQUM5QixDQUFDO3FDQVk0QixxQ0FBZ0I7UUFDaEIseUJBQWdCO1FBQzNCLDRCQUFrQjtRQUNsQix1QkFBZ0I7R0FkdEIsYUFBYSxDQTBEekI7QUExRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2V2ZW50L2V2ZW50XCI7XG5pbXBvcnQgeyBFdmVudExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ldmVudC9ldmVudC1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEV2ZW50RmlsdGVyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9ldmVudC1maWx0ZXIvZXZlbnQtZmlsdGVyLm1vZGFsJztcblxuXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xubW9tZW50LmxvY2FsZSgnZXMnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBwcm92aWRlcnM6IFtFdmVudExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGU6IHN0cmluZyA9ICdFdmVudG9zJztcbiAgZXZlbnRMaXN0OiBBcnJheTxFdmVudD4gPSBbXTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGxpc3RMb2FkZWQgPSBmYWxzZTtcbiAgZmlsdGVyID0ge1xuICAgIHNlYXJjaFRleHQ6IFwiXCIsXG4gICAgY2F0ZWdvcnk6IFwiYW55XCJcbiAgfVxuICBpY29uU2VhcmNoID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwMDIpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGV2ZW50TGlzdFNlcnZpY2U6IEV2ZW50TGlzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICBzaG93RGV0YWlscyhlKXtcbiAgICBsZXQgZXZlbnQgPSB0aGlzLmV2ZW50TGlzdFtlLmluZGV4XTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2V2ZW50LWRldGFpbHNcIl0sXG4gICAgICB7XG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2UsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICB9LFxuICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgIGV2ZW50OiBKU09OLnN0cmluZ2lmeShldmVudClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50TGlzdFNlcnZpY2UubG9hZCgpXG4gICAgLnN1YnNjcmliZShsb2FkZWRFdmVudHMgPT4ge1xuICAgICAgbG9hZGVkRXZlbnRzLmZvckVhY2goKGV2ZW50T2JqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0LnVuc2hpZnQoZXZlbnRPYmplY3QpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5GaWx0ZXIoYXJnczogYW55KXtcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5pbmcgRmlsdGVyLi4uXCIpO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXG4gICAgICB9LFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICB9O1xuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEV2ZW50RmlsdGVyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyID0gcmVzO1xuICAgIH0pO1xuICB9XG59XG4iXX0=