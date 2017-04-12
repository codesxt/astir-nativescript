import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';

import { SideDrawerPageComponent } from './side-drawer-page';
import { BorderlessBtnDirective } from './borderless-btn.directive';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [
    SideDrawerPageComponent,
    BorderlessBtnDirective
  ],
  exports: [
    SideDrawerPageComponent,
    BorderlessBtnDirective
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {

}
