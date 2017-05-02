"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./pages/app.component");
var app_routing_module_1 = require("./pages/app-routing.module");
var home_component_1 = require("./pages/home/home.component");
var about_component_1 = require("./pages/about/about.component");
var contact_component_1 = require("./pages/contact/contact.component");
var event_details_component_1 = require("./pages/event-details/event-details.component");
var event_filter_modal_1 = require("./pages/event-filter/event-filter.modal");
var shared_1 = require("./pages/shared");
var angular2_moment_1 = require("angular2-moment");
var string_format_1 = require("./pipes/string-format");
var category_translate_1 = require("./pipes/category-translate");
var events_filter_1 = require("./pipes/events-filter");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            event_details_component_1.EventDetailsComponent,
            string_format_1.StringFormatPipe,
            category_translate_1.CategoryTranslatePipe,
            events_filter_1.EventsFilterPipe,
            event_filter_modal_1.EventFilterModalComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            app_routing_module_1.AppRoutingModule,
            shared_1.SharedModule,
            angular2_moment_1.MomentModule,
            forms_1.NativeScriptFormsModule
        ],
        entryComponents: [
            event_filter_modal_1.EventFilterModalComponent
        ],
        providers: [modal_dialog_1.ModalDialogService],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxrRUFBdUU7QUFDdkUsb0RBQXFFO0FBRXJFLHVEQUFxRDtBQUNyRCxpRUFBOEQ7QUFFOUQsOERBQTREO0FBQzVELGlFQUErRDtBQUMvRCx1RUFBcUU7QUFDckUseUZBQXNGO0FBQ3RGLDhFQUFvRjtBQUVwRix5Q0FBOEM7QUFFOUMsbURBQTZDO0FBRTdDLHVEQUF5RDtBQUN6RCxpRUFBbUU7QUFDbkUsdURBQXlEO0FBNkJ6RCxJQUFhLFNBQVM7SUFBdEI7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFNBQVM7SUEzQnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osOEJBQWE7WUFDYixnQ0FBYztZQUNkLG9DQUFnQjtZQUNoQiwrQ0FBcUI7WUFDckIsZ0NBQWdCO1lBQ2hCLDBDQUFxQjtZQUNyQixnQ0FBZ0I7WUFDaEIsOENBQXlCO1NBQzFCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLDZCQUFzQjtZQUN0QixxQ0FBZ0I7WUFDaEIscUJBQVk7WUFDWiw4QkFBWTtZQUNaLCtCQUF1QjtTQUN4QjtRQUNELGVBQWUsRUFBRTtZQUNmLDhDQUF5QjtTQUMxQjtRQUNELFNBQVMsRUFBRSxDQUFDLGlDQUFrQixDQUFDO1FBQy9CLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLFNBQVMsQ0FFckI7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3BhZ2VzL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdmVudEZpbHRlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9ldmVudC1maWx0ZXIvZXZlbnQtZmlsdGVyLm1vZGFsJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9wYWdlcy9zaGFyZWQnO1xuXG5pbXBvcnQge01vbWVudE1vZHVsZX0gZnJvbSAnYW5ndWxhcjItbW9tZW50JztcblxuaW1wb3J0IHsgU3RyaW5nRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZXMvc3RyaW5nLWZvcm1hdCc7XG5pbXBvcnQgeyBDYXRlZ29yeVRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2NhdGVnb3J5LXRyYW5zbGF0ZSc7XG5pbXBvcnQgeyBFdmVudHNGaWx0ZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9ldmVudHMtZmlsdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgQ29udGFjdENvbXBvbmVudCxcbiAgICBFdmVudERldGFpbHNDb21wb25lbnQsXG4gICAgU3RyaW5nRm9ybWF0UGlwZSxcbiAgICBDYXRlZ29yeVRyYW5zbGF0ZVBpcGUsXG4gICAgRXZlbnRzRmlsdGVyUGlwZSxcbiAgICBFdmVudEZpbHRlck1vZGFsQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBNb21lbnRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRXZlbnRGaWx0ZXJNb2RhbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtNb2RhbERpYWxvZ1NlcnZpY2VdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuIl19