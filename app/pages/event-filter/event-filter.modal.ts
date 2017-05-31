import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

let categoryList = [
  {value: "any", name: "Todos"},
  {value: "music", name: "Música"},
  {value: "theatre", name: "Teatro"},
  {value: "opera", name: "Ópera"},
  {value: "exposition", name: "Exposición"},
  {value: "festival", name: "Festival"},
  {value: "fair", name: "Feria"},
  {value: "talk", name: "Charla"},
  {value: "movie", name: "Cine"},
  {value: "outdoors", name: "Aire Libre"}
];

@Component({
    selector: "event-filter-modal",
    moduleId: module.id,
    templateUrl: "event-filter.modal.html",
})
export class EventFilterModalComponent {
    public searchText: string;
    public categories: Array<string>;
    public categoryValues: Array<string>;
    public pickedCategory: string;
    public selectedIndex: number;
    public constructor(private params: ModalDialogParams) {
      this.categories = [];
      this.categoryValues = [];
      this.searchText = "";
      this.pickedCategory = categoryList[0].value;
      for (let i = 0; i < categoryList.length; i++) {
          this.categories.push(categoryList[i].name);
          this.categoryValues.push(categoryList[i].value);
      }

      this.searchText = this.params.context.filter.searchText;
    }

    public close(res: string) {
      let filter = {
        searchText: this.searchText,
        category: this.pickedCategory
      };
      console.log("Filter:\n"+JSON.stringify(filter, null, '\t'));
      this.params.closeCallback(filter);
    }

    public selectedIndexChanged(picker) {
      if(picker.selectedIndex == null){
        picker.selectedIndex = 0;
      }
      this.pickedCategory = this.categoryValues[picker.selectedIndex];
    }
}
