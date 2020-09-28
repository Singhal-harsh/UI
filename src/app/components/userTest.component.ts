import { Component } from '@angular/core';

import { formData } from './formData';

@Component({
    selector : 'userTest',
    templateUrl: './userTest.component.html',
    

})
export class userTestComponent{

    public currencies1= ['EUR','GBP','AUD'];
    public currencies2= ['USD','JPY','CHF'];
    public dataTrial = 0;

    
    
    formDataModel = new formData();

    onSubmit(){

        console.log(this.formDataModel);
    }

    handleClickTrial(){

        this.dataTrial = this.formDataModel.currencyOneAskRate;

    }


 }
