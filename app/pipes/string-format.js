"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StringFormatPipe = (function () {
    function StringFormatPipe() {
    }
    StringFormatPipe.prototype.transform = function (str, mode) {
        if (mode == null) {
            return str;
        }
        ;
        switch (mode) {
            case 'capitalizeFirst': {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
            default: {
                return str;
            }
        }
    };
    return StringFormatPipe;
}());
StringFormatPipe = __decorate([
    core_1.Pipe({
        name: 'stringFormat',
        pure: false
    })
], StringFormatPipe);
exports.StringFormatPipe = StringFormatPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0cmluZy1mb3JtYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFNbkQsSUFBYSxnQkFBZ0I7SUFBN0I7SUFhQSxDQUFDO0lBWkMsb0NBQVMsR0FBVCxVQUFVLEdBQVcsRUFBRSxJQUFZO1FBQ2pDLEVBQUUsQ0FBQSxDQUFFLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDO1FBQUEsQ0FBQztRQUNGLE1BQU0sQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDWCxLQUFLLGlCQUFpQixFQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUFBLFNBQVEsQ0FBQztnQkFDUixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGdCQUFnQjtJQUo1QixXQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUUsS0FBSztLQUNaLENBQUM7R0FDVyxnQkFBZ0IsQ0FhNUI7QUFiWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc3RyaW5nRm9ybWF0JyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oc3RyOiBzdHJpbmcsIG1vZGU6IHN0cmluZykge1xuICAgIGlmKCBtb2RlID09IG51bGwpe1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9O1xuICAgIHN3aXRjaChtb2RlKXtcbiAgICAgIGNhc2UgJ2NhcGl0YWxpemVGaXJzdCc6e1xuICAgICAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgICAgfWRlZmF1bHQ6e1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19