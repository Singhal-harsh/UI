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
    public controlf:boolean;
    public controlr:boolean;
    public prof:number;
    public pror:number;

    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }

    onSubmit(){

        this.userService.sendInputCac(this.formDataModel).subscribe(data => {  
            this.outputobj=data;
            this.controlf = this.outputobj?.fwdArbitrage;
            this.controlr = this.outputobj?.revArbitrage;
            this.prof = this.outputobj?.profit_loss_fwd;
            this.pror = this.outputobj?.profit_loss_rev;
        });
        

        
    }

 }
