import { Component } from '@angular/core';
import { formData } from './formData';

@Component({
    selector : 'userTest',
    templateUrl: './userTest.component.html',

})
export class userTestComponent{

    public currencies= ['USD','JPY','EUR','INR', 'GBP'];
    public dataTrial = 0;

    
    formDataModel = new formData(105.38, 105.42, 105.75, 105.84, 4.95, 5.28, 0.31, 0.42);

    onSubmit(){

        console.log(this.formDataModel);
    }

    handleClickTrial(){

        this.dataTrial = this.formDataModel.currencyOneAskRate;

    }

 }
