"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EventsFilterPipe = (function () {
    function EventsFilterPipe() {
    }
    EventsFilterPipe.prototype.transform = function (events, params) {
        var searchText = ((params[0] != "") ? params[0] : "");
        var category = ((params[1] != "") ? params[1] : "any");
        if (searchText == null) {
            return events;
        }
        var query = searchText.toLowerCase();
        return events.filter(function (event) {
            return (event.title.toLowerCase().indexOf(query) > -1) &&
                (event.category == category || category == "any");
        });
    };
    return EventsFilterPipe;
}());
EventsFilterPipe = __decorate([
    core_1.Pipe({
        name: 'eventsFilter',
        pure: false
    })
], EventsFilterPipe);
exports.EventsFilterPipe = EventsFilterPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50cy1maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFNcEQsSUFBYSxnQkFBZ0I7SUFBN0I7SUFhQSxDQUFDO0lBWkMsb0NBQVMsR0FBVCxVQUFVLE1BQWEsRUFBRSxNQUFXO1FBQ2xDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUFDLENBQUM7UUFDekMsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSztZQUN0QixPQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQztRQURqRCxDQUNpRCxDQUVwRCxDQUFDO0lBQ0osQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxnQkFBZ0I7SUFKNUIsV0FBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDO0dBQ1csZ0JBQWdCLENBYTVCO0FBYlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdldmVudHNGaWx0ZXInLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudHNGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgdHJhbnNmb3JtKGV2ZW50czogYW55W10sIHBhcmFtczogYW55KSB7XG4gICAgbGV0IHNlYXJjaFRleHQgPSAoKHBhcmFtc1swXSAhPSBcIlwiKSA/IHBhcmFtc1swXSA6IFwiXCIpO1xuICAgIGxldCBjYXRlZ29yeSA9ICgocGFyYW1zWzFdICE9IFwiXCIpID8gcGFyYW1zWzFdIDogXCJhbnlcIik7XG4gICAgaWYoc2VhcmNoVGV4dCA9PSBudWxsKSB7IHJldHVybiBldmVudHM7IH1cbiAgICBsZXQgcXVlcnkgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gZXZlbnRzLmZpbHRlcihldmVudCA9PlxuICAgICAgICAoZXZlbnQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5KSA+IC0xKSAmJlxuICAgICAgICAoZXZlbnQuY2F0ZWdvcnkgPT0gY2F0ZWdvcnkgfHwgY2F0ZWdvcnkgPT0gXCJhbnlcIilcblxuICAgICk7XG4gIH1cbn1cbiJdfQ==