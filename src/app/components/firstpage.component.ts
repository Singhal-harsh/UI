import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector : 'firstpage',
    templateUrl: './firstpage.component.html',
    styleUrls: ['./firstpage.component.scss']

})
export class FirstComponent{ 

    public activatedRoute: ActivatedRoute;
    public router: Router;

    constructor(activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }

    toFX() {

        this.router.navigate(["homefx"]);
    }
    
    toCac() {
    
        this.router.navigate(["homecac"]);
    }

    

    toFRA() {
       
        this.router.navigate(["homefra"]);

    }


}