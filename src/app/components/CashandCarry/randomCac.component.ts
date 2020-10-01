import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'randomcac',
  templateUrl: './randomCac.component.html',
  providers: [DatePipe]
})

export class RandomComponentCac {
  
  public subscription: Subscription;
  public userService : UserService;
  public activatedRoute: ActivatedRoute;
  public router: Router;

  public index: number = 0;
  public randomobj: any;
  public randoms = [];
  
  public displayDetails: boolean=false;
  public displayObj:any;
  
  public controlf:boolean = false;
  public controlr:boolean = false;
  

  constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router, public datepipe: DatePipe) {
      this.activatedRoute = activatedRoute;
      this.userService = userService;
      this.router = router;
  }

  ngOnInit(){
      this.getValues();
      const source = interval(2000);
      this.subscription = source.subscribe(val => this.getValues());
    }

  getValues(){

    this.userService.getRandomCac().subscribe(data =>{  
      this.randomobj = data;  
      this.controlf = this.randomobj?.fwdArbitrage;
      this.controlr = this.randomobj?.revArbitrage;
      if(this.controlf || this.controlr){
        this.randoms.push(this.randomobj);
        this.index = this.index + 1;
       
      }
      });

      
    }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  display(robj:any){
    this.displayDetails=true;
    this.displayObj=robj;
  }
}