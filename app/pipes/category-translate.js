"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CategoryTranslatePipe = (function () {
    function CategoryTranslatePipe() {
        this.categories = [
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
    }
    CategoryTranslatePipe.prototype.transform = function (str) {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var cat = _a[_i];
            if (cat.value == str)
                return cat.name;
        }
        return str;
    };
    return CategoryTranslatePipe;
}());
CategoryTranslatePipe = __decorate([
    core_1.Pipe({
        name: 'categoryTranslate',
        pure: false
    })
], CategoryTranslatePipe);
exports.CategoryTranslatePipe = CategoryTranslatePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdHJhbnNsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0ZWdvcnktdHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBTW5ELElBQWEscUJBQXFCO0lBSmxDO1FBS0UsZUFBVSxHQUFHO1lBQ1gsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDaEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDbEMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDL0IsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDekMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDckMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDOUIsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDL0IsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7WUFDOUIsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7U0FDeEMsQ0FBQztJQU9KLENBQUM7SUFOQyx5Q0FBUyxHQUFULFVBQVUsR0FBVztRQUNuQixHQUFHLENBQUMsQ0FBWSxVQUFlLEVBQWYsS0FBQSxJQUFJLENBQUMsVUFBVSxFQUFmLGNBQWUsRUFBZixJQUFlO1lBQTFCLElBQUksR0FBRyxTQUFBO1lBQ1YsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDdEM7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxxQkFBcUI7SUFKakMsV0FBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixJQUFJLEVBQUUsS0FBSztLQUNaLENBQUM7R0FDVyxxQkFBcUIsQ0FrQmpDO0FBbEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjYXRlZ29yeVRyYW5zbGF0ZScsXG4gIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5VHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjYXRlZ29yaWVzID0gW1xuICAgIHt2YWx1ZTogXCJtdXNpY1wiLCBuYW1lOiBcIk3DunNpY2FcIn0sXG4gICAge3ZhbHVlOiBcInRoZWF0cmVcIiwgbmFtZTogXCJUZWF0cm9cIn0sXG4gICAge3ZhbHVlOiBcIm9wZXJhXCIsIG5hbWU6IFwiw5NwZXJhXCJ9LFxuICAgIHt2YWx1ZTogXCJleHBvc2l0aW9uXCIsIG5hbWU6IFwiRXhwb3NpY2nDs25cIn0sXG4gICAge3ZhbHVlOiBcImZlc3RpdmFsXCIsIG5hbWU6IFwiRmVzdGl2YWxcIn0sXG4gICAge3ZhbHVlOiBcImZhaXJcIiwgbmFtZTogXCJGZXJpYVwifSxcbiAgICB7dmFsdWU6IFwidGFsa1wiLCBuYW1lOiBcIkNoYXJsYVwifSxcbiAgICB7dmFsdWU6IFwibW92aWVcIiwgbmFtZTogXCJDaW5lXCJ9LFxuICAgIHt2YWx1ZTogXCJvdXRkb29yc1wiLCBuYW1lOiBcIkFpcmUgTGlicmVcIn1cbiAgXTtcbiAgdHJhbnNmb3JtKHN0cjogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgY2F0IG9mIHRoaXMuY2F0ZWdvcmllcykge1xuICAgICAgaWYoY2F0LnZhbHVlID09IHN0cikgcmV0dXJuIGNhdC5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG4iXX0=