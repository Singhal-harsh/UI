import {Component} from '@angular/core';
import {formData} from './formData';
import {outputData} from './outputData';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {ActivatedRoute , NavigationExtras, Router} from '@angular/router';


@Component({
    selector : 'userTest',
    templateUrl: './userTest.component.html',
    providers: [ UserService ]
    

})
export class userTestComponent{

    public currencies1= ['EUR','GBP','AUD'];
    public currencies2= ['USD','JPY','CHF'];
    public dataTrial = 0;
    public userService : UserService;
    public activatedRoute: ActivatedRoute;
    public router: Router;
    
    
    public formDataModel = new formData();
    public outputobj = new outputData();

    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
    }

    onSubmit(){

        console.log(this.formDataModel);
         this.userService.sendInput(this.formDataModel).subscribe(data => console.log(data), error => console.log(error));
        //  let observable:Observable<Object> = this.userService.getOutput();
        //  observable.subscribe((response:any)=>this.outputobj= response);
        //  console.log(this.outputobj);
    }

    // handleClickTrial(){

    //     this.dataTrial = this.formDataModel.interest_rate_curr1_ask;

    // }


 }
