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
        this.router.navigate(["usertestfx"]);

    }

    randomArb() {
        this.router.navigate(["randomfx"]);
    }
}