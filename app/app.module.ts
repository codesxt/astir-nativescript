import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./pages/app.component";
import { AppRoutingModule } from './pages/app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EventFilterModalComponent } from './pages/event-filter/event-filter.modal';

import { SharedModule } from './pages/shared';

import {MomentModule} from 'angular2-moment';

import { StringFormatPipe } from './pipes/string-format';
import { CategoryTranslatePipe } from './pipes/category-translate';
import { EventsFilterPipe } from './pipes/events-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventDetailsComponent,
    StringFormatPipe,
    CategoryTranslatePipe,
    EventsFilterPipe,
    EventFilterModalComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    AppRoutingModule,
    SharedModule,
    MomentModule,
    NativeScriptFormsModule
  ],
  entryComponents: [
    EventFilterModalComponent
  ],
  providers: [ModalDialogService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {

}
