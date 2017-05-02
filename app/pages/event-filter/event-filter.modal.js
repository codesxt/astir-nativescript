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
        console.log("Texto:" + this.searchText);
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
        templateUrl: "event-filter.modal.html",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], EventFilterModalComponent);
exports.EventFilterModalComponent = EventFilterModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZmlsdGVyLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnQtZmlsdGVyLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUU1RSxJQUFJLFlBQVksR0FBRztJQUNqQixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztJQUM3QixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNsQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztJQUMvQixFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztJQUN6QyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztJQUNyQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztJQUM5QixFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUMvQixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUM5QixFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztDQUN4QyxDQUFDO0FBTUYsSUFBYSx5QkFBeUI7SUFLbEMsbUNBQTJCLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDMUQsQ0FBQztJQUVNLHlDQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksTUFBTSxHQUFHO1lBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYztTQUM5QixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSx3REFBb0IsR0FBM0IsVUFBNEIsTUFBTTtRQUNoQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDL0IsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSx5QkFBeUI7SUFKckMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsV0FBVyxFQUFFLHlCQUF5QjtLQUN6QyxDQUFDO3FDQU1xQywyQkFBaUI7R0FMM0MseUJBQXlCLENBaUNyQztBQWpDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5cbmxldCBjYXRlZ29yeUxpc3QgPSBbXG4gIHt2YWx1ZTogXCJhbnlcIiwgbmFtZTogXCJUb2Rvc1wifSxcbiAge3ZhbHVlOiBcIm11c2ljXCIsIG5hbWU6IFwiTcO6c2ljYVwifSxcbiAge3ZhbHVlOiBcInRoZWF0cmVcIiwgbmFtZTogXCJUZWF0cm9cIn0sXG4gIHt2YWx1ZTogXCJvcGVyYVwiLCBuYW1lOiBcIsOTcGVyYVwifSxcbiAge3ZhbHVlOiBcImV4cG9zaXRpb25cIiwgbmFtZTogXCJFeHBvc2ljacOzblwifSxcbiAge3ZhbHVlOiBcImZlc3RpdmFsXCIsIG5hbWU6IFwiRmVzdGl2YWxcIn0sXG4gIHt2YWx1ZTogXCJmYWlyXCIsIG5hbWU6IFwiRmVyaWFcIn0sXG4gIHt2YWx1ZTogXCJ0YWxrXCIsIG5hbWU6IFwiQ2hhcmxhXCJ9LFxuICB7dmFsdWU6IFwibW92aWVcIiwgbmFtZTogXCJDaW5lXCJ9LFxuICB7dmFsdWU6IFwib3V0ZG9vcnNcIiwgbmFtZTogXCJBaXJlIExpYnJlXCJ9XG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJldmVudC1maWx0ZXItbW9kYWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJldmVudC1maWx0ZXIubW9kYWwuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudEZpbHRlck1vZGFsQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc2VhcmNoVGV4dDogc3RyaW5nO1xuICAgIHB1YmxpYyBjYXRlZ29yaWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHB1YmxpYyBjYXRlZ29yeVZhbHVlczogQXJyYXk8c3RyaW5nPjtcbiAgICBwdWJsaWMgcGlja2VkQ2F0ZWdvcnk6IHN0cmluZztcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcbiAgICAgIHRoaXMuY2F0ZWdvcnlWYWx1ZXMgPSBbXTtcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFwiXCI7XG4gICAgICB0aGlzLnBpY2tlZENhdGVnb3J5ID0gY2F0ZWdvcnlMaXN0WzBdLnZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeUxpc3RbaV0ubmFtZSk7XG4gICAgICAgICAgdGhpcy5jYXRlZ29yeVZhbHVlcy5wdXNoKGNhdGVnb3J5TGlzdFtpXS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHRoaXMucGFyYW1zLmNvbnRleHQuZmlsdGVyLnNlYXJjaFRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKHJlczogc3RyaW5nKSB7XG4gICAgICBsZXQgZmlsdGVyID0ge1xuICAgICAgICBzZWFyY2hUZXh0OiB0aGlzLnNlYXJjaFRleHQsXG4gICAgICAgIGNhdGVnb3J5OiB0aGlzLnBpY2tlZENhdGVnb3J5XG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coXCJUZXh0bzpcIiArIHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKGZpbHRlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKHBpY2tlcikge1xuICAgICAgaWYocGlja2VyLnNlbGVjdGVkSW5kZXggPT0gbnVsbCl7XG4gICAgICAgIHBpY2tlci5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMucGlja2VkQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5VmFsdWVzW3BpY2tlci5zZWxlY3RlZEluZGV4XTtcbiAgICB9XG59XG4iXX0=