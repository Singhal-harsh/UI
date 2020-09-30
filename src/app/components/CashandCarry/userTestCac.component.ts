import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute , Router} from '@angular/router';
import { formDataCac } from './formDataCac';


@Component({
    selector : 'usertestcac',
    templateUrl: './userTestCac.component.html',
    providers: [ UserService ],
    styleUrls: ['./userTestCac.component.css']
    

})
export class userTestComponentCac{

    public stocks= ['Amazon','Apple','Reliance'];
    public dataTrial = 0;
    public userService : UserService;
    public activatedRoute: ActivatedRoute;
    public router: Router;
    
    
    public formDataModel = new formDataCac();
    public outputobj: any;

    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }

    onSubmit(){

        console.log(this.formDataModel);
        this.userService.sendInputCac(this.formDataModel).subscribe(data => { 
            console.log(data);  
            this.outputobj=data;
            console.log(this.outputobj.fwdArbitrage);
        });

    }

 }