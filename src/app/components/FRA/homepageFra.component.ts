import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector : 'homefra',
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
        this.router.navigate(["usertestfra"]);
    }

    randomArb() {
        this.router.navigate(["randomfra"]);
    }
}