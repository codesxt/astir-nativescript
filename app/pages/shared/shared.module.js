"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var side_drawer_page_1 = require("./side-drawer-page");
var borderless_btn_directive_1 = require("./borderless-btn.directive");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            angular_1.NativeScriptUISideDrawerModule
        ],
        declarations: [
            side_drawer_page_1.SideDrawerPageComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ],
        exports: [
            side_drawer_page_1.SideDrawerPageComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLHNFQUE0RjtBQUU1Rix1REFBNkQ7QUFDN0QsdUVBQW9FO0FBaUJwRSxJQUFhLFlBQVk7SUFBekI7SUFFQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFlBQVk7SUFmeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLHdDQUE4QjtTQUMvQjtRQUNELFlBQVksRUFBRTtZQUNaLDBDQUF1QjtZQUN2QixpREFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCwwQ0FBdUI7WUFDdkIsaURBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLFlBQVksQ0FFeEI7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcblxuaW1wb3J0IHsgU2lkZURyYXdlclBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NpZGUtZHJhd2VyLXBhZ2UnO1xuaW1wb3J0IHsgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZSB9IGZyb20gJy4vYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2lkZURyYXdlclBhZ2VDb21wb25lbnQsXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2lkZURyYXdlclBhZ2VDb21wb25lbnQsXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcblxufVxuIl19