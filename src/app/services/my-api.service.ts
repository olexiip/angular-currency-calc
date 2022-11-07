import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor (private http: HttpClient) {}
  
  apiUrl:string = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
  response:any;

    getData(): any {
     const ff =  this.http.get(this.apiUrl);
    // console.log(ff);
    return ff;
  }

}
