import { Component } from '@angular/core';

import { formData } from './formData';

@Component({
    selector : 'userTest',
    templateUrl: './userTest.component.html',

})
export class userTestComponent{

    public currencies= ['USD','JPY','EUR','INR', 'GBP'];
    public dataTrial = 0;

    
    
    formDataModel = new formData();

    onSubmit(){

        console.log(this.formDataModel);
    }

    handleClickTrial(){

        this.dataTrial = this.formDataModel.currencyOneAskRate;

    }


 }
