import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'random',
  templateUrl: './random.component.html',
  providers: [DatePipe]
})
export class RandomComponent {
  
  public alertShow: boolean = true;
  
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