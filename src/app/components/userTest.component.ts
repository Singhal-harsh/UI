import {Component} from '@angular/core';
import {formData} from './formData';
import {outputData} from './outputData';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {ActivatedRoute , NavigationExtras, Router} from '@angular/router';


@Component({
    selector : 'userTest',
    templateUrl: './userTest.component.html',

})
export class userTestComponent{

    public currencies= ['USD','JPY','EUR','INR', 'GBP'];
    public dataTrial = 0;
    public userService : UserService;
    public editprod = {"id":1,"name":"Chairs","quantity":30,"price":1500.0};
    public activatedRoute: ActivatedRoute;
    public router: Router;
    
    
    public formDataModel = new formData();
    public outputobj = new outputData();

    constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
       // let observable:Observable<Object> = productService.getProducts();
       // observable.subscribe((response:any)=>this.products = response);
    }

    onSubmit(){

        console.log(this.formDataModel);
        //this.userService.send(this.formDataModel).subscribe(prodob => this.products.push(prodob));
    }

    handleClickTrial(){

        this.dataTrial = this.formDataModel.interest_rate_curr1_ask;

    }


 }
