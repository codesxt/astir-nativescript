"use strict";
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.text = 'Página de Inicio';
    }
    HomeComponent.prototype.test = function () {
        alert("¡Esto es una prueba!");
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW1FO0FBT25FLElBQWEsYUFBYTtJQUwxQjtRQU1FLFNBQUksR0FBVyxrQkFBa0IsQ0FBQztJQUtwQyxDQUFDO0lBSEMsNEJBQUksR0FBSjtRQUNFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csYUFBYSxDQU16QjtBQU5ZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgdGV4dDogc3RyaW5nID0gJ1DDoWdpbmEgZGUgSW5pY2lvJztcblxuICB0ZXN0ICgpe1xuICAgIGFsZXJ0KFwiwqFFc3RvIGVzIHVuYSBwcnVlYmEhXCIpO1xuICB9XG59XG4iXX0=