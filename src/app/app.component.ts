import { Component, OnInit, Input } from '@angular/core';
import { MyApiService } from './services/api.service';
import { Rate } from './models/RateClass';

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
  UAH = new Rate("Ураїнська гривня", 1, "UAH");

  ngOnInit() {
    this.myApi.getData().subscribe({next:(resp:Rate[]) => {
      resp.unshift(this.UAH);
      this.data=resp;
      this.findHeaderCurrency();
    }}); 
    
  };
 
  ngOnDestroy() {
    this.myApi.getData().subscribe();
  }
  
  findHeaderCurrency() {
     this.USD = this.data.find((element:any) => {
     return element.cc === "USD"
    })?.rate

    this.EUR = this.data.find((element:any) => {
      return element.cc === "EUR"
    })?.rate;

}

}
