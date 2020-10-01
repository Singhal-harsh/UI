import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'randomfx',
  templateUrl: './random.component.html',
  providers: [DatePipe]
})

export class RandomComponent {
  
  public subscription: Subscription;
  
  public userService : UserService;
  public activatedRoute: ActivatedRoute;
  public router: Router;

  public controlf:boolean = false;
  public controlr:boolean = false;
  
  public displayDetails: boolean=false;

  public index: number = 0;
  public randomobj: any;
  public randoms = [];

  public displayObj:any;
  
  constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router, public datepipe: DatePipe) {
      this.activatedRoute = activatedRoute;
      this.userService = userService;
      this.router = router;
  }

  ngOnInit(){
      this.getValues();
      const source = interval(6000);
      this.subscription = source.subscribe(val => this.getValues());
    }

  getValues(){

    
    this.userService.getRandom().subscribe(data =>{  
      this.controlf = this.randomobj?.fwdArbitrage;
      this.controlr = this.randomobj?.revArbitrage;
      this.randomobj = data;  
      if(this.controlf|| this.controlr){
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