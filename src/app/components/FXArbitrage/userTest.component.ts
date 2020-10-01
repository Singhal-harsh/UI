import {Component} from '@angular/core';
import {formData} from './formData';
import {UserService} from '../../services/user.service';
import {ActivatedRoute , Router} from '@angular/router';


@Component({
    selector : 'usertestfx',
    templateUrl: './userTest.component.html',
    providers: [ UserService ],
    styleUrls: ['./userTest.component.css']
    

})
export class userTestComponent{

    public currencies1= ['USD','GBP','CAD','AUD','EUR','JPY','CHF'];
    public currencies2= ['EUR','CAD','GBP','AUD','USD','JPY','CHF'];
    public dataTrial = 0;
    public userService : UserService;
    public activatedRoute: ActivatedRoute;
    public router: Router;
    
    
    public formDataModel = new formData();
    public outputobj: any;


    public controlf:boolean;
    public controlr:boolean;
    public prof:number;
    public pror:number;
    public flag:boolean = false;

    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }

    onSubmit(){

        this.userService.sendInput(this.formDataModel).subscribe(data => { 
            this.outputobj=data;
            this.setValues();
        });
        
    }

    setValues(){
        this.controlf = this.outputobj?.fwdArbitrage;
        this.controlr = this.outputobj?.revArbitrage;
        this.prof = this.outputobj?.profit_loss_fwd;
        this.pror = this.outputobj?.profit_loss_rev;
        this.flag = true;
    }


 }
