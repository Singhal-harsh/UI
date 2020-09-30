import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute , Router} from '@angular/router';
import { FormDataFra } from './formDataFra';


@Component({
    selector : 'usertestfra',
    templateUrl: './userTestFra.component.html',
    providers: [ UserService ],
    styleUrls: ['./userTestFra.component.css']
    

})
export class userTestComponentFra{

    public dataTrial = 0;
    public userService : UserService;
    public activatedRoute: ActivatedRoute;
    public router: Router;
    public control:boolean = false;
    
    
    public formDataModel = new FormDataFra();
    public outputobj: any;

    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }

    onSubmit(){

        this.userService.sendInputFra(this.formDataModel).subscribe(data => {  
            this.outputobj=data;
        });
        this.control = this.outputobj.fwdArbitrage;
    }
 }
