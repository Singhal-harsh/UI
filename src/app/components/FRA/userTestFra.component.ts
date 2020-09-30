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
    
    
    public formDataModel = new FormDataFra();
    public outputobj: any;

    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }

    onSubmit(){

        console.log(this.formDataModel);
        this.userService.sendInputFra(this.formDataModel).subscribe(data => { 
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
