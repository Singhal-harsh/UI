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
        
        // let navigationExtras: NavigationExtras = {
        //     queryParams: editprod
        // };
        this.router.navigate(["home"]);
    }
    
    toCac() {
        
        // let navigationExtras: NavigationExtras = {
        //     queryParams: editprod
        // };
        this.router.navigate(["homeCac"]);
    }

    

    toFRA() {
        
        // let navigationExtras: NavigationExtras = {
        //     queryParams: editprod
        // };

        
        this.router.navigate(["homeFra"]);

    }


}