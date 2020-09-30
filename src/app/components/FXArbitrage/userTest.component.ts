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


    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }

    onSubmit(){

        console.log(this.formDataModel);
        this.userService.sendInput(this.formDataModel).subscribe(data => { 
            console.log(data);  
            this.outputobj=data;
            console.log(this.outputobj.fwdArbitrage);
        });
        
        // this.flag1 = this.flag;
        // this.flag = false;


    }

    // showPop(){
    //     // setTimeout(() => {
    //     this.flag = true;
    //     //   }, 3000);
    // }
        //  let observable:Observable<Object> = this.userService.getOutput();
        //  observable.subscribe((response:any)=>this.outputobj= response);
        //  console.log(this.outputobj);
    

    // handleClickTrial(){

    //     this.dataTrial = this.formDataModel.interest_rate_curr1_ask;

    // }


 }
