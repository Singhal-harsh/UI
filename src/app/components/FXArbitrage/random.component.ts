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

  public dateTime:String;
  public dates = []; 
  public index : number = 0;

  public displayDetails: boolean=false;

  public randomobj: any;
  public randoms = [];

  public displayObj:any;
  
  constructor(userService : UserService, activatedRoute: ActivatedRoute , router: Router, public datepipe: DatePipe) {
      this.activatedRoute = activatedRoute;
      this.userService = userService;
      this.router = router;
  }

  ngOnInit(){
      const source = interval(10000);
      this.subscription = source.subscribe(val => this.getValues());
    }

  getValues(){

    this.dateTime=this.datepipe.transform(new Date().toString(),'MMM d, y, h:mm:ss a');

    this.userService.getRandom().subscribe(data =>{  
      this.randomobj = data;  
      if(this.randomobj.fwdArbitrage || this.randomobj.revArbitrage){
        this.randoms.push(this.randomobj);
        this.dateTime = this.datepipe.transform(new Date().toString(),'MMM d, y, h:mm:ss a');
        this.dates.push(this.dateTime);
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