import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';

import {formData} from '../components/formData';
import {outputData} from '../components/outputData';

@Injectable({
    providedIn: 'root',
  })
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

    sendInput(inputobj : any): Observable<Object> {
        console.log('sendInput called');
        return this.httpClient.post(this.baseurl+'/userArbitrage', inputobj,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }

    getRandom(): Observable<any> {
        console.log("Get Random called");
        return this.httpClient.get(`${this.baseurl}` + '/randomArbitrage', {headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
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