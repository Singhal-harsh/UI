import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector : 'homeFra',
    templateUrl: './homepageFra.component.html',
    styleUrls: ['./homepageFra.component.css']

})
export class HomeComponentFra{
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
        this.router.navigate(["userTestFra"]);

    }

    randomArb() {
        
        // let navigationExtras: NavigationExtras = {
        //     queryParams: editprod
        // };

        console.log("Checking randomArb");
        this.router.navigate(["fra-random"]);

    }
}