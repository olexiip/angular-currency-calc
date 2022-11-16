import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Rate } from '../models/RateClass';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor (private http: HttpClient) {}
  
  apiUrl:string = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
  response:any;

  getData():Observable<Rate[]> {
    return this.http.get(this.apiUrl)
      .pipe(map(
        (resp:any)=>{
          let rateList = resp;
          return rateList.map(
            function(rate:any):Rate {
              return new Rate(rate.txt,rate.rate,rate.cc);
            });
        }));
  }
}
