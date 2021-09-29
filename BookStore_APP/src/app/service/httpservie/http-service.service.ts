import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  post(url:any,data:any,token : any){
    return this.httpClient.post(this.baseUrl+url,data,token);
  }

  get(url:any,token:any){
    return this.httpClient.get(this.baseUrl+url,token);
  }

  delete(url: any,token : any){
    return this.httpClient.delete(this.baseUrl+url,token);
  }

  put(url : any,data : any , token : any){
    return this.httpClient.put(this.baseUrl+url,data,token)
  }

  
  getData(url:any){
    return this.httpClient.get(this.baseUrl+url);
  }
}

