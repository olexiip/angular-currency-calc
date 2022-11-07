import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MyApiService } from './services/my-api.service';
import { Rate } from './models/RateClass';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  constructor (private myApi: MyApiService) {
  
  }
  data:Rate[]=[];
  USD:any="--";
  EUR:any = "--";
  UAH={
    "cc":"UAH",
    "txt":"Ураїнська гривня",
    "rate":1,
    "exchangedate":"",
    "r030":"980"
  };
  
  getDataSub:any;

  ngOnInit() {
    console.log("ngOnInit");
    this.myApi.getData().subscribe({next:(resp:Rate[]) => {
      resp.push(this.UAH);
      this.data=resp;
      // console.log(this.data)
      this.ff();
    }}); 
    
  };
 
  ngOnDestroy() {
    if(this.getDataSub){
      console.log("unsubscribe");
      alert("ff");
      this.getDataSub.unsubscribe();
    }
  }
  ff() {
     this.USD = this.data.find( (element:any) => {
     return element.cc === "USD"
    })?.rate

    this.EUR = this.data.find((element:any) => {
      return element.cc === "EUR"
    })?.rate;

}

}










//https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json