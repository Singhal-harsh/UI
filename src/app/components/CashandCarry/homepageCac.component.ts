import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector : 'homeCac',
    templateUrl: './homepageCac.component.html',
    styleUrls: ['./homepageCac.component.css']

})
export class HomeComponentCac{
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
        this.router.navigate(["userInputCac"]);

    }

    randomArb() {
        
        // let navigationExtras: NavigationExtras = {
        //     queryParams: editprod
        // };

        console.log("Checking randomArb");
        this.router.navigate(["randomCac"]);

    }
}