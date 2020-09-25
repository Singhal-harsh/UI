import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'random',
  templateUrl: './random.component.html',
  providers: [DatePipe]
})

export class RandomComponent {
  
  public alertShow: boolean = true;
  public id: any = 1;
  public  spot_bid: any = 105.38;
  public  spot_ask: any = 105.42;
  public  fwd_bid: any = 105.75;
  public  fwd_ask: any = 105.84;
  public  ifirst_bid: any = 4.95;
  public  ifirst_ask: any = 5.28;
  public  isecond_bid: any = 0.31;
  public  isecond_ask: any = 0.42;
  public  trans: any = 20;
  public  quantity: any = 1000;
  public profit: any = 5.42;
  
  
  closeAlert() : void {
    this.alertShow = false;
  }
  
  constructor(public datepipe: DatePipe){}
  public dateTime:String = this.datepipe.transform(new Date().toString(),'MMM d, y, h:mm:ss a');
  

  




  // showAlert() : void {
  //   if (this.alertShow) { // if the alert is visible return
  //     return;
  //   } 
  //   this.alertShow = true;
  //   setTimeout(()=> this.alertShow = false,4500); // hide the alert after 2.5s
  // }
}