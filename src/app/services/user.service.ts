import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';

import {formData} from '../components/formData';
import {outputData} from '../components/outputData';

@Injectable()
export class UserService {

    public baseurl : string = "http://localhost:8084";

    public httpClient :  HttpClient;
    constructor (httpClient : HttpClient)
    {
        this.httpClient = httpClient;
    }

    // addProduct(productObj : any){
    //     console.log('Product pushed into an array: ');
    // }

    sendInput(inputobj : formData): Observable<Object> {
        console.log('sendInput called');
        return this.httpClient.post(this.baseurl+'/userArbitrage', inputobj,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }

    getOutput() {
        console.log("Get Output called");
        return this.httpClient.get(this.baseurl + '/userArbitrage');
    }

    // updateProduct(id:number,value:any): Observable<Object> {
    //     console.log('!!!!!' + id);
    //     console.log(this.baseurl+'/product/'+id);
    //     return this.httpClient.put(this.baseurl+'/product/' + id,value);

    // }

    // deleteProduct(id:number): Observable<any> {
    //     console.log('$$$' + id);
    //     console.log(this.baseurl+'/product/'+id);
    //     return this.httpClient.delete(this.baseurl+'/product/' + id, {responseType:'text'});
    //     window.history.go(0);
    // }
}