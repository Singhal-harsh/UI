import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root',
  })
export class UserService {

    public baseurl : string = "http://localhost:8084/api";

    public httpClient :  HttpClient;
    constructor (httpClient : HttpClient)
    {
        this.httpClient = httpClient;
    }


    sendInput(inputobj : any): Observable<Object> {
        
        return this.httpClient.post(this.baseurl+'/user/fx', inputobj,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }

    getRandom(): Observable<any> {
        
        return this.httpClient.get(`${this.baseurl}` + '/random/fx', {headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    }


    sendInputCac(inputobj : any): Observable<Object> {
        
        return this.httpClient.post(this.baseurl+'/user/cash&carry', inputobj,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }

    getRandomCac(): Observable<any> {
        
        return this.httpClient.get(`${this.baseurl}` + '/random/cash&carry', {headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    }

    sendInputFra(inputobj : any): Observable<Object> {
       
        return this.httpClient.post(this.baseurl+'/user/fra', inputobj,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }

    getRandomFra(): Observable<any> {
       
        return this.httpClient.get(`${this.baseurl}` + '/random/fra', {headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    }
}