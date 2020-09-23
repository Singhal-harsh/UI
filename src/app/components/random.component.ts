import { Component } from '@angular/core';

@Component({
  selector: 'random',
  templateUrl: './random.component.html'
})
export class RandomComponent {

  public alertShow: boolean = true;
  closeAlert() : void {
    this.alertShow = false;
  }
 
  // showAlert() : void {
  //   if (this.alertShow) { // if the alert is visible return
  //     return;
  //   } 
  //   this.alertShow = true;
  //   setTimeout(()=> this.alertShow = false,4500); // hide the alert after 2.5s
  // }
}