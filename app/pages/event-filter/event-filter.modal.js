"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var categoryList = [
    { value: "any", name: "Todos" },
    { value: "music", name: "Música" },
    { value: "theatre", name: "Teatro" },
    { value: "opera", name: "Ópera" },
    { value: "exposition", name: "Exposición" },
    { value: "festival", name: "Festival" },
    { value: "fair", name: "Feria" },
    { value: "talk", name: "Charla" },
    { value: "movie", name: "Cine" },
    { value: "outdoors", name: "Aire Libre" }
];
var EventFilterModalComponent = (function () {
    function EventFilterModalComponent(params) {
        this.params = params;
        this.categories = [];
        this.categoryValues = [];
        this.searchText = "";
        this.pickedCategory = categoryList[0].value;
        for (var i = 0; i < categoryList.length; i++) {
            this.categories.push(categoryList[i].name);
            this.categoryValues.push(categoryList[i].value);
        }
        this.searchText = this.params.context.filter.searchText;
    }
    EventFilterModalComponent.prototype.close = function (res) {
        var filter = {
            searchText: this.searchText,
            category: this.pickedCategory
        };
        console.log("Filter:\n" + JSON.stringify(filter, null, '\t'));
        this.params.closeCallback(filter);
    };
    EventFilterModalComponent.prototype.selectedIndexChanged = function (picker) {
        if (picker.selectedIndex == null) {
            picker.selectedIndex = 0;
        }
        this.pickedCategory = this.categoryValues[picker.selectedIndex];
    };
    return EventFilterModalComponent;
}());
EventFilterModalComponent = __decorate([
    core_1.Component({
        selector: "event-filter-modal",
        moduleId: module.id,
        templateUrl: "event-filter.modal.html",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], EventFilterModalComponent);
exports.EventFilterModalComponent = EventFilterModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZmlsdGVyLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnQtZmlsdGVyLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUU1RSxJQUFJLFlBQVksR0FBRztJQUNqQixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztJQUM3QixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNsQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztJQUMvQixFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztJQUN6QyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztJQUNyQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztJQUM5QixFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUMvQixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUM5QixFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztDQUN4QyxDQUFDO0FBT0YsSUFBYSx5QkFBeUI7SUFNbEMsbUNBQTJCLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDMUQsQ0FBQztJQUVNLHlDQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksTUFBTSxHQUFHO1lBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYztTQUM5QixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLHdEQUFvQixHQUEzQixVQUE0QixNQUFNO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUMvQixNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLHlCQUF5QjtJQUxyQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtLQUN6QyxDQUFDO3FDQU9xQywyQkFBaUI7R0FOM0MseUJBQXlCLENBa0NyQztBQWxDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5cbmxldCBjYXRlZ29yeUxpc3QgPSBbXG4gIHt2YWx1ZTogXCJhbnlcIiwgbmFtZTogXCJUb2Rvc1wifSxcbiAge3ZhbHVlOiBcIm11c2ljXCIsIG5hbWU6IFwiTcO6c2ljYVwifSxcbiAge3ZhbHVlOiBcInRoZWF0cmVcIiwgbmFtZTogXCJUZWF0cm9cIn0sXG4gIHt2YWx1ZTogXCJvcGVyYVwiLCBuYW1lOiBcIsOTcGVyYVwifSxcbiAge3ZhbHVlOiBcImV4cG9zaXRpb25cIiwgbmFtZTogXCJFeHBvc2ljacOzblwifSxcbiAge3ZhbHVlOiBcImZlc3RpdmFsXCIsIG5hbWU6IFwiRmVzdGl2YWxcIn0sXG4gIHt2YWx1ZTogXCJmYWlyXCIsIG5hbWU6IFwiRmVyaWFcIn0sXG4gIHt2YWx1ZTogXCJ0YWxrXCIsIG5hbWU6IFwiQ2hhcmxhXCJ9LFxuICB7dmFsdWU6IFwibW92aWVcIiwgbmFtZTogXCJDaW5lXCJ9LFxuICB7dmFsdWU6IFwib3V0ZG9vcnNcIiwgbmFtZTogXCJBaXJlIExpYnJlXCJ9XG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJldmVudC1maWx0ZXItbW9kYWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcImV2ZW50LWZpbHRlci5tb2RhbC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50RmlsdGVyTW9kYWxDb21wb25lbnQge1xuICAgIHB1YmxpYyBzZWFyY2hUZXh0OiBzdHJpbmc7XG4gICAgcHVibGljIGNhdGVnb3JpZXM6IEFycmF5PHN0cmluZz47XG4gICAgcHVibGljIGNhdGVnb3J5VmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHB1YmxpYyBwaWNrZWRDYXRlZ29yeTogc3RyaW5nO1xuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gW107XG4gICAgICB0aGlzLmNhdGVnb3J5VmFsdWVzID0gW107XG4gICAgICB0aGlzLnNlYXJjaFRleHQgPSBcIlwiO1xuICAgICAgdGhpcy5waWNrZWRDYXRlZ29yeSA9IGNhdGVnb3J5TGlzdFswXS52YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnlMaXN0W2ldLm5hbWUpO1xuICAgICAgICAgIHRoaXMuY2F0ZWdvcnlWYWx1ZXMucHVzaChjYXRlZ29yeUxpc3RbaV0udmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlYXJjaFRleHQgPSB0aGlzLnBhcmFtcy5jb250ZXh0LmZpbHRlci5zZWFyY2hUZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgICAgbGV0IGZpbHRlciA9IHtcbiAgICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgICBjYXRlZ29yeTogdGhpcy5waWNrZWRDYXRlZ29yeVxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyOlxcblwiK0pTT04uc3RyaW5naWZ5KGZpbHRlciwgbnVsbCwgJ1xcdCcpKTtcbiAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soZmlsdGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleENoYW5nZWQocGlja2VyKSB7XG4gICAgICBpZihwaWNrZXIuc2VsZWN0ZWRJbmRleCA9PSBudWxsKXtcbiAgICAgICAgcGlja2VyLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5waWNrZWRDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnlWYWx1ZXNbcGlja2VyLnNlbGVjdGVkSW5kZXhdO1xuICAgIH1cbn1cbiJdfQ==