"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUU3RixtRUFBNkU7QUFDN0Usc0RBQStEO0FBRS9ELDRFQUF5RTtBQUN6RSx5RUFBK0U7QUFHL0UsK0JBQWlDO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFRcEIsSUFBYSxhQUFhO0lBVXhCLHVCQUNVLGdCQUFrQyxFQUNsQyxnQkFBa0MsRUFDbEMsS0FBeUIsRUFDekIsS0FBdUI7UUFIdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBYmpDLFVBQUssR0FBVyxTQUFTLENBQUM7UUFDMUIsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQU0sR0FBRztZQUNQLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQTtRQUNELGVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBTXRDLENBQUM7SUFFSixtQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUMvQztZQUNFLFlBQVksRUFBRSxLQUFLO1lBQ25CLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNsQjtZQUNELFdBQVcsRUFBRTtnQkFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDN0I7U0FDRixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTthQUMzQixTQUFTLENBQUMsVUFBQSxZQUFZO1lBQ3JCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxXQUFXO2dCQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFlO1FBQTFCLGlCQVlDO1FBWEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHO1lBQ1osT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNwQjtZQUNELFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyw4Q0FBeUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQy9ELEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxPQUFPO1FBQ2hELFNBQVMsRUFBRSxDQUFDLHFDQUFnQixDQUFDO0tBQzlCLENBQUM7cUNBWTRCLHFDQUFnQjtRQUNoQix5QkFBZ0I7UUFDM0IsNEJBQWtCO1FBQ2xCLHVCQUFnQjtHQWR0QixhQUFhLENBMER6QjtBQTFEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2V2ZW50L2V2ZW50XCI7XG5pbXBvcnQgeyBFdmVudExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ldmVudC9ldmVudC1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEV2ZW50RmlsdGVyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9ldmVudC1maWx0ZXIvZXZlbnQtZmlsdGVyLm1vZGFsJztcblxuXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xubW9tZW50LmxvY2FsZSgnZXMnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBwcm92aWRlcnM6IFtFdmVudExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGU6IHN0cmluZyA9ICdFdmVudG9zJztcbiAgZXZlbnRMaXN0OiBBcnJheTxFdmVudD4gPSBbXTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGxpc3RMb2FkZWQgPSBmYWxzZTtcbiAgZmlsdGVyID0ge1xuICAgIHNlYXJjaFRleHQ6IFwiXCIsXG4gICAgY2F0ZWdvcnk6IFwiYW55XCJcbiAgfVxuICBpY29uU2VhcmNoID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwMDIpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGV2ZW50TGlzdFNlcnZpY2U6IEV2ZW50TGlzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICBzaG93RGV0YWlscyhlKXtcbiAgICBsZXQgZXZlbnQgPSB0aGlzLmV2ZW50TGlzdFtlLmluZGV4XTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2V2ZW50LWRldGFpbHNcIl0sXG4gICAgICB7XG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2UsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICB9LFxuICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgIGV2ZW50OiBKU09OLnN0cmluZ2lmeShldmVudClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50TGlzdFNlcnZpY2UubG9hZCgpXG4gICAgLnN1YnNjcmliZShsb2FkZWRFdmVudHMgPT4ge1xuICAgICAgbG9hZGVkRXZlbnRzLmZvckVhY2goKGV2ZW50T2JqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0LnVuc2hpZnQoZXZlbnRPYmplY3QpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5GaWx0ZXIoYXJnczogRXZlbnREYXRhKXtcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5pbmcgRmlsdGVyLi4uXCIpO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXG4gICAgICB9LFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICB9O1xuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEV2ZW50RmlsdGVyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyID0gcmVzO1xuICAgIH0pO1xuICB9XG59XG4iXX0=