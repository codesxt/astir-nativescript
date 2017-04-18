import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'event-details', component: EventDetailsComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
