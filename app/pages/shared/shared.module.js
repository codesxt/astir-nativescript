"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUUzRCxnRkFBOEU7QUFDOUUsc0VBQTRGO0FBRTVGLHVEQUE2RDtBQUM3RCx1RUFBb0U7QUFpQnBFLElBQWEsWUFBWTtJQUF6QjtJQUVBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksWUFBWTtJQWZ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsd0NBQThCO1NBQy9CO1FBQ0QsWUFBWSxFQUFFO1lBQ1osMENBQXVCO1lBQ3ZCLGlEQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLDBDQUF1QjtZQUN2QixpREFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csWUFBWSxDQUV4QjtBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1kcmF3ZXItcGFnZSc7XG5pbXBvcnQgeyBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlIH0gZnJvbSAnLi9ib3JkZXJsZXNzLWJ0bi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCxcbiAgICBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCxcbiAgICBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuXG59XG4iXX0=