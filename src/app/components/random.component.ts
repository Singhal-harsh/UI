import { Component } from '@angular/core';

@Component({
  selector: 'random',
  templateUrl: './random.component.html'
})
export class RandomComponent {

  public alertShow: boolean = true;
  // public str : any = document.getElementById("Arbopp").innerHTML;
  // str.addListener(new FieldEvents.TextChangeListener() {

  //   @Override
  //   public void textChange(TextChangeEvent event) {

  //       doSomething(event.getText());
  //   }
// });

  // showAlert() : void {
  //   if (this.alertShow) { // if the alert is visible return
  //     return;
  //   } 
  //   this.alertShow = true;
  //   setTimeout(()=> this.alertShow = false,4500); // hide the alert after 2.5s
  // }
}