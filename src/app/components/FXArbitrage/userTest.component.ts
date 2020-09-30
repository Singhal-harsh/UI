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

    public currencies1= ['USD','GBP','AUD','EUR','JPY','CHF'];
    public currencies2= ['EUR','GBP','AUD','USD','JPY','CHF'];
    public dataTrial = 0;
    public userService : UserService;
    public activatedRoute: ActivatedRoute;
    public router: Router;
    
    
    public formDataModel = new formData();
    public outputobj: any;

    public flag : boolean = true;
    public flag1 : boolean = false;
    public controlf:boolean = false;
    public controlr:boolean = false;
    public prof:number = 10;
    public pror:number = 10;

    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }

    onSubmit(){

        this.userService.sendInput(this.formDataModel).subscribe(data => { 
            this.outputobj=data;
            this.controlf = this.outputobj?.fwdArbitrage;
            this.controlr = this.outputobj?.revArbitrage;
            this.prof = this.outputobj?.profit_loss_fwd;
            this.pror = this.outputobj?.profit_loss_rev;
        });
        
        

    }


 }
