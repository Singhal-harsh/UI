import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';



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


    sendInput(inputobj : any): Observable<Object> {
        
        return this.httpClient.post(this.baseurl+'/userFxArbitrage', inputobj,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }

    getRandom(): Observable<any> {
        
        return this.httpClient.get(`${this.baseurl}` + '/randomFxArbitrage', {headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    }


    sendInputCac(inputobj : any): Observable<Object> {
        
        return this.httpClient.post(this.baseurl+'/userCashArbitrage', inputobj,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }

    getRandomCac(): Observable<any> {
        
        return this.httpClient.get(`${this.baseurl}` + '/randomCashArbitrage', {headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    }

    sendInputFra(inputobj : any): Observable<Object> {
       
        return this.httpClient.post(this.baseurl+'/userFRAArbitrage', inputobj,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }

    getRandomFra(): Observable<any> {
       
        return this.httpClient.get(`${this.baseurl}` + '/randomFRAArbitrage', {headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    }
}