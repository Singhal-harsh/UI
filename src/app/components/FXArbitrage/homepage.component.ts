import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector : 'homefx',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']

})
export class HomeComponent{
    public activatedRoute: ActivatedRoute;
    public router: Router;

    constructor(activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }

    checkArb() {
        
        // let navigationExtras: NavigationExtras = {
        //     queryParams: editprod
        // };

        console.log("Checking checkArb");
        this.router.navigate(["usertestfx"]);

    }

    randomArb() {
        
        // let navigationExtras: NavigationExtras = {
        //     queryParams: editprod
        // };

        console.log("Checking randomArb");
        this.router.navigate(["randomfx"]);

    }
}