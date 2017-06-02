"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var Calendar = require("nativescript-calendar");
var CalendarModalComponent = (function () {
    function CalendarModalComponent(params) {
        var _this = this;
        this.params = params;
        this.calendarNames = [];
        this.options = {};
        this.eventData = {};
        this.eventData = this.params.context.eventData;
        Calendar.listCalendars().then(function (calendars) {
            for (var _i = 0, calendars_1 = calendars; _i < calendars_1.length; _i++) {
                var c = calendars_1[_i];
                _this.calendarNames.push(c.name);
            }
        }, function (error) {
            console.log("Error finding Calendars: " + error);
        });
        this.options = {
            title: this.eventData.title,
            startDate: new Date(this.eventData.when.start),
            endDate: new Date(this.eventData.when.finish)
        };
        this.options.calendar = {
            name: this.calendarNames[0],
            color: "#AA0000",
            accountName: "Astir"
        };
        this.options.notes = "(Evento añadido desde Astir.)" + "\n\n" + this.eventData.description;
        /*
        console.log(Object.getOwnPropertyNames(Calendar).filter(function (p) {
          return typeof Calendar[p] === 'function';
        }));*/
    }
    CalendarModalComponent.prototype.addEvent = function () {
        var successText = "Se añadió exitosamente el evento: " + this.options.title;
        Calendar.createEvent(this.options).then(function (createdId) {
            console.log("Created Event with ID: " + createdId);
            alert({
                title: "Evento creado",
                message: successText,
                okButtonText: "OK"
            });
        }, function (error) {
            console.log("Error creating an Event: " + error);
            alert({
                title: "Error",
                message: "Se ha producido un error registrando el evento",
                okButtonText: "OK"
            });
        });
        this.close();
    };
    CalendarModalComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        //console.log("picker selection: " + picker.selectedIndex);
        var selectedName = this.calendarNames[picker.selectedIndex];
        this.options.calendar.name = selectedName;
        //this.picked = this.pokemons[picker.selectedIndex];
    };
    CalendarModalComponent.prototype.close = function () {
        var result = {
            message: "SUCC"
        };
        this.params.closeCallback(result);
    };
    return CalendarModalComponent;
}());
CalendarModalComponent = __decorate([
    core_1.Component({
        selector: "calendar-modal",
        moduleId: module.id,
        templateUrl: "calendar.modal.html",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], CalendarModalComponent);
exports.CalendarModalComponent = CalendarModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxlbmRhci5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxtRUFBNEU7QUFFNUUsZ0RBQWtEO0FBT2xELElBQWEsc0JBQXNCO0lBSS9CLGdDQUNVLE1BQXlCO1FBRG5DLGlCQWdDQztRQS9CUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUpuQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFJbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFL0MsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDM0IsVUFBQyxTQUFTO1lBQ1IsR0FBRyxDQUFBLENBQVUsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTO2dCQUFsQixJQUFJLENBQUMsa0JBQUE7Z0JBQ1AsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxFQUFDLFVBQUMsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUNGLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUMzQixTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDOUMsQ0FBQTtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMzQixLQUFLLEVBQUUsU0FBUztZQUNoQixXQUFXLEVBQUUsT0FBTztTQUNyQixDQUFBO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsK0JBQStCLEdBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQ3ZGOzs7Y0FHTTtJQUNSLENBQUM7SUFFTSx5Q0FBUSxHQUFmO1FBQ0UsSUFBSSxXQUFXLEdBQUcsb0NBQW9DLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDMUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNyQyxVQUFTLFNBQVM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUMsQ0FBQztZQUNuRCxLQUFLLENBQUM7Z0JBQ0osS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUE7UUFDSixDQUFDLEVBQ0QsVUFBUyxLQUFLO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNqRCxLQUFLLENBQUM7Z0JBQ0osS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLGdEQUFnRDtnQkFDekQsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0scURBQW9CLEdBQTNCLFVBQTRCLElBQUk7UUFDOUIsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQywyREFBMkQ7UUFDM0QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUMxQyxvREFBb0Q7SUFDdEQsQ0FBQztJQUVNLHNDQUFLLEdBQVo7UUFDRSxJQUFJLE1BQU0sR0FBRztZQUNYLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBM0VELElBMkVDO0FBM0VZLHNCQUFzQjtJQUxsQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDO3FDQU1vQiwyQkFBaUI7R0FMMUIsc0JBQXNCLENBMkVsQztBQTNFWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBDYWxlbmRhciBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbGVuZGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNhbGVuZGFyLW1vZGFsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJjYWxlbmRhci5tb2RhbC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9kYWxDb21wb25lbnQge1xuICAgIGNhbGVuZGFyTmFtZXM6IFN0cmluZ1tdID0gW107XG4gICAgb3B0aW9uczogYW55ID0ge307XG4gICAgZXZlbnREYXRhOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXNcbiAgICApIHtcbiAgICAgIHRoaXMuZXZlbnREYXRhID0gdGhpcy5wYXJhbXMuY29udGV4dC5ldmVudERhdGE7XG5cbiAgICAgIENhbGVuZGFyLmxpc3RDYWxlbmRhcnMoKS50aGVuKFxuICAgICAgICAoY2FsZW5kYXJzKT0+e1xuICAgICAgICAgIGZvcihsZXQgYyBvZiBjYWxlbmRhcnMpe1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhck5hbWVzLnB1c2goYy5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sKGVycm9yKT0+e1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmluZGluZyBDYWxlbmRhcnM6IFwiICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiB0aGlzLmV2ZW50RGF0YS50aXRsZSxcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aGlzLmV2ZW50RGF0YS53aGVuLnN0YXJ0KSxcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGhpcy5ldmVudERhdGEud2hlbi5maW5pc2gpXG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucy5jYWxlbmRhciA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5jYWxlbmRhck5hbWVzWzBdLFxuICAgICAgICBjb2xvcjogXCIjQUEwMDAwXCIsXG4gICAgICAgIGFjY291bnROYW1lOiBcIkFzdGlyXCJcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zLm5vdGVzID0gXCIoRXZlbnRvIGHDsWFkaWRvIGRlc2RlIEFzdGlyLilcIitcIlxcblxcblwiK3RoaXMuZXZlbnREYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgLypcbiAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKENhbGVuZGFyKS5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBDYWxlbmRhcltwXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIH0pKTsqL1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFdmVudCgpe1xuICAgICAgbGV0IHN1Y2Nlc3NUZXh0ID0gXCJTZSBhw7FhZGnDsyBleGl0b3NhbWVudGUgZWwgZXZlbnRvOiBcIit0aGlzLm9wdGlvbnMudGl0bGU7XG4gICAgICBDYWxlbmRhci5jcmVhdGVFdmVudCh0aGlzLm9wdGlvbnMpLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKGNyZWF0ZWRJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlZCBFdmVudCB3aXRoIElEOiBcIiArIGNyZWF0ZWRJZCk7XG4gICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXZlbnRvIGNyZWFkb1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogc3VjY2Vzc1RleHQsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjcmVhdGluZyBhbiBFdmVudDogXCIgKyBlcnJvcik7XG4gICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2UgaGEgcHJvZHVjaWRvIHVuIGVycm9yIHJlZ2lzdHJhbmRvIGVsIGV2ZW50b1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgICBsZXQgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XG4gICAgICAvL2NvbnNvbGUubG9nKFwicGlja2VyIHNlbGVjdGlvbjogXCIgKyBwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG4gICAgICBsZXQgc2VsZWN0ZWROYW1lID0gdGhpcy5jYWxlbmRhck5hbWVzW3BpY2tlci5zZWxlY3RlZEluZGV4XTtcbiAgICAgIHRoaXMub3B0aW9ucy5jYWxlbmRhci5uYW1lID0gc2VsZWN0ZWROYW1lO1xuICAgICAgLy90aGlzLnBpY2tlZCA9IHRoaXMucG9rZW1vbnNbcGlja2VyLnNlbGVjdGVkSW5kZXhdO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgIG1lc3NhZ2U6IFwiU1VDQ1wiXG4gICAgICB9XG4gICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxufVxuIl19