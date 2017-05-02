"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var action_bar_1 = require("ui/action-bar");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var SideDrawerPageComponent = (function () {
    function SideDrawerPageComponent(routerExtensions, activatedRoute, page, ngZone) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.page = page;
        this.ngZone = ngZone;
        /**
         * On tap of any side-drawer item, hiding content if this flag is true.
         */
        this.isContentVisible = true;
        /**
         * Navigation Menu Items
         */
        this.navMenu = [
            { name: 'Inicio', commands: ['/'], icon: String.fromCharCode(0xf015) },
            { name: 'Acerca de', commands: ['/about'], icon: String.fromCharCode(0xf0c0) },
            { name: 'Contacto', commands: ['/contact'], icon: String.fromCharCode(0xf2bc) }
        ];
        var currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        var isInRoot = false;
        for (var i = 0; i < this.navMenu.length; i++) {
            isInRoot = (this.navMenu[i].commands[0] == currentUrl) ? true : isInRoot;
        }
        if (isInRoot)
            this.setActionBarIcon(this.page);
        this.setDrawerTransition();
    }
    SideDrawerPageComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    SideDrawerPageComponent.prototype.ngOnDestroy = function () {
        this.drawer.off('drawerClosed');
    };
    SideDrawerPageComponent.prototype.toggleSideDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    /**
     * Navigates to next page after drawer is closed.
     */
    SideDrawerPageComponent.prototype.navigateTo = function (routeCommands) {
        var _this = this;
        this.drawer.closeDrawer();
        var currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        var newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        var newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.isContentVisible = false;
            this.drawer.on('drawerClosed', function () {
                _this.ngZone.run(function () {
                    _this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    _this.isContentVisible = true;
                });
            });
        }
    };
    SideDrawerPageComponent.prototype.setDrawerTransition = function () {
        if (platform_1.isAndroid) {
            this.drawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }
        if (platform_1.isIOS) {
            this.drawerTransition = new sidedrawer_1.PushTransition();
        }
    };
    SideDrawerPageComponent.prototype.setActionBarIcon = function (page) {
        if (platform_1.isAndroid) {
            page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (platform_1.isIOS) {
            page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    };
    SideDrawerPageComponent.prototype.getNavigationButton = function () {
        var navActionItem = new action_bar_1.ActionItem();
        navActionItem.icon = 'res://ic_menu_black';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    };
    SideDrawerPageComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return SideDrawerPageComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SideDrawerPageComponent.prototype, "drawerComponent", void 0);
SideDrawerPageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'side-drawer-page',
        templateUrl: './side-drawer-page.component.html',
        styleUrls: ['./side-drawer-page.component.css']
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.ActivatedRoute,
        page_1.Page,
        core_1.NgZone])
], SideDrawerPageComponent);
exports.SideDrawerPageComponent = SideDrawerPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUV1QjtBQUN2QiwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUErQjtBQUMvQixxQ0FBNEM7QUFDNUMsNENBQTJDO0FBQzNDLHNFQUVvRDtBQUNwRCxpRUFFNEM7QUFRNUMsSUFBYSx1QkFBdUI7SUF3QmxDLGlDQUNVLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixJQUFVLEVBQ1YsTUFBYztRQUhkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBekJ4Qjs7V0FFRztRQUNILHFCQUFnQixHQUFZLElBQUksQ0FBQztRQU9qQzs7V0FFRztRQUNILFlBQU8sR0FBVTtZQUNmLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQztZQUNyRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2hGLENBQUM7UUFVQSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FB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LG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVPLHFEQUFtQixHQUEzQjtRQUNFLElBQUksYUFBYSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ3JDLGFBQWEsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUM7UUFDRCxhQUFhLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLDhDQUFZLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUE1R0QsSUE0R0M7QUEzR29DO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQWtCLGdDQUFzQjtnRUFBQztBQURoRSx1QkFBdUI7SUFObkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7UUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7S0FDaEQsQ0FBQztxQ0EwQjRCLHlCQUFnQjtRQUNsQix1QkFBYztRQUN4QixXQUFJO1FBQ0YsYUFBTTtHQTVCYix1QkFBdUIsQ0E0R25DO0FBNUdZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBOZ1pvbmUsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gJ3VpL2FjdGlvbi1iYXInO1xuaW1wb3J0IHtcbiAgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGVcbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7XG4gIFB1c2hUcmFuc2l0aW9uLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uXG59IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzaWRlLWRyYXdlci1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtZHJhd2VyLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBPbiB0YXAgb2YgYW55IHNpZGUtZHJhd2VyIGl0ZW0sIGhpZGluZyBjb250ZW50IGlmIHRoaXMgZmxhZyBpcyB0cnVlLlxuICAgKi9cbiAgaXNDb250ZW50VmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEZvciBhbmRyb2lkIHVzaW5nIFNsaWRlT25Ub3AgdHJhbnNpdGlvbiBhbmQgZm9yIGlPUywgcHVzaCB0cmFuc2l0aW9uLlxuICAgKi9cbiAgZHJhd2VyVHJhbnNpdGlvbjogYW55O1xuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIE1lbnUgSXRlbXNcbiAgICovXG4gIG5hdk1lbnU6IGFueVtdID0gW1xuICAgIHsgbmFtZTogJ0luaWNpbycsIGNvbW1hbmRzOiBbJy8nXSwgaWNvbjogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwMTUpfSxcbiAgICB7IG5hbWU6ICdBY2VyY2EgZGUnLCBjb21tYW5kczogWycvYWJvdXQnXSwgaWNvbjogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwYzApIH0sXG4gICAgeyBuYW1lOiAnQ29udGFjdG8nLCBjb21tYW5kczogWycvY29udGFjdCddLCBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjJiYykgfVxuICBdO1xuXG4gIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgbGV0IGN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybDtcbiAgICBsZXQgaXNJblJvb3QgPSBmYWxzZTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubmF2TWVudS5sZW5ndGg7aSsrKXtcbiAgICAgIGlzSW5Sb290ID0gKHRoaXMubmF2TWVudVtpXS5jb21tYW5kc1swXSA9PSBjdXJyZW50VXJsKSA/IHRydWUgOiBpc0luUm9vdDtcbiAgICB9XG4gICAgaWYoaXNJblJvb3QpIHRoaXMuc2V0QWN0aW9uQmFySWNvbih0aGlzLnBhZ2UpO1xuICAgIHRoaXMuc2V0RHJhd2VyVHJhbnNpdGlvbigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZHJhd2VyLm9mZignZHJhd2VyQ2xvc2VkJyk7XG4gIH1cblxuICB0b2dnbGVTaWRlRHJhd2VyKCkge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIG5leHQgcGFnZSBhZnRlciBkcmF3ZXIgaXMgY2xvc2VkLlxuICAgKi9cbiAgbmF2aWdhdGVUbyhyb3V0ZUNvbW1hbmRzOiBhbnlbXSkge1xuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgbGV0IGN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnVybDtcbiAgICBsZXQgbmV3VXJsVHJlZSA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShyb3V0ZUNvbW1hbmRzKTtcbiAgICBsZXQgbmV3VXJsID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5zZXJpYWxpemVVcmwobmV3VXJsVHJlZSk7XG4gICAgaWYgKGN1cnJlbnRVcmwgIT09IG5ld1VybCkge1xuICAgICAgdGhpcy5pc0NvbnRlbnRWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZHJhd2VyLm9uKCdkcmF3ZXJDbG9zZWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKHJvdXRlQ29tbWFuZHMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmlzQ29udGVudFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RHJhd2VyVHJhbnNpdGlvbigpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICB0aGlzLmRyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGlmIChpc0lPUykge1xuICAgICAgdGhpcy5kcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFB1c2hUcmFuc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25CYXJJY29uKHBhZ2U6IFBhZ2UpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBwYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uID0gdGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICBwYWdlLmFjdGlvbkJhci5hY3Rpb25JdGVtcy5hZGRJdGVtKHRoaXMuZ2V0TmF2aWdhdGlvbkJ1dHRvbigpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hdmlnYXRpb25CdXR0b24oKSB7XG4gICAgbGV0IG5hdkFjdGlvbkl0ZW0gPSBuZXcgQWN0aW9uSXRlbSgpO1xuICAgIG5hdkFjdGlvbkl0ZW0uaWNvbiA9ICdyZXM6Ly9pY19tZW51X2JsYWNrJztcbiAgICBpZiAobmF2QWN0aW9uSXRlbS5pb3MpIHtcbiAgICAgIG5hdkFjdGlvbkl0ZW0uaW9zLnBvc2l0aW9uID0gJ2xlZnQnO1xuICAgIH1cbiAgICBuYXZBY3Rpb25JdGVtLm9uKCd0YXAnLCB0aGlzLnRvZ2dsZURyYXdlci5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gbmF2QWN0aW9uSXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRHJhd2VyKCkge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==