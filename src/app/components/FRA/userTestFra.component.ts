import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute , Router} from '@angular/router';
import { FormDataFra } from './formDataFra';
import { interval, Subscription } from 'rxjs';


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
    public subscription: Subscription;
    
    public formDataModel = new FormDataFra();
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

        this.userService.sendInputFra(this.formDataModel).subscribe(data => {  
            this.outputobj=data;
            this.setValues();
        });
    }

    setValues(){
        this.controlf = this.outputobj?.fwdArbitrage;
        this.controlr = this.outputobj?.revArbitrage;
        this.prof = this.outputobj?.profit_loss_fwd;
        this.pror = this.outputobj?.profit_loss_rev;
        console.log(this.outputobj);
        this.flag = true;
    }
    // showPop(){
    //     // const source = interval(2000);
    //     // this.subscription = source.subscribe(val => this.changeFlag());  
    //     // 
    //     setTimeout(() => {
    //         alert(this.prof);
    //       }, 2000);
         
    // }

    // changeFlag(){
    //     this.flag = true;
    //     console.log(this.flag);
    // }

    // closePop(){
    //     this.flag=false;
    // }
 }
