import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector : 'homecac',
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
        this.router.navigate(["usertestcac"]);
    }

    randomArb() {
        this.router.navigate(["randomcac"]);
    }
}