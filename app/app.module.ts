import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { FirstComponent, SecondComponent } from './navigation-common';

@NgModule({
  declarations: [
  	AppComponent,
  	FirstComponent,
	SecondComponent  	
  ],
  bootstrap: [AppComponent],
  imports: [
  	NativeScriptModule,
  	AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
