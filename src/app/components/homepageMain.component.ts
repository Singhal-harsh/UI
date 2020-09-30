import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector : 'home',
    templateUrl: './homepageMain.component.html',
    styleUrls: ['./homepageMain.component.css']

})
export class HomeComponentMain{
    public activatedRoute: ActivatedRoute;
    public router: Router;

    constructor(activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }

    toCac(){
        this.router.navigate(["homecac"]);
    }

    toFra() {
        this.router.navigate(["homefra"]);
    }

    toFx() {
        this.router.navigate(["homefx"]);
    }
}