import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { FirstComponent, SecondComponent } from "./navigation-common";

const routes: Routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: FirstComponent },
    { path: "second", component: SecondComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }