import { Component } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
    selector: "navigation-test",
    template: `
        <StackLayout>

            <StackLayout class="nav">
                <Button text="First" 
                    [nsRouterLink]="['/first']"></Button>
                <Button text="Second"
                    [nsRouterLink]="['/second']"></Button>
            </StackLayout>

            <router-outlet></router-outlet>
        </StackLayout>
    `
})
export class AppComponent {
}