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
  ready = false;
  USD = new Rate("Долар США", 0.00, "USD");
  EUR = new Rate("Евро", 0.00, "EUR");
  UAH = new Rate("Ураїнська гривня", 1, "UAH");

  ngOnInit() {
      this.myApi.getData().subscribe({next:(resp:Rate[]) => {
        if (resp.length>1) {
          this.sortByPop(resp);
          resp.unshift(this.UAH);
          this.USD = resp[1];
          this.EUR = resp[2];
          this.data=resp;
          this.ready=true;
        }
      }}); 
  };

  sortByPop = (data:Rate[]) => {
    data.sort((a:Rate, b:Rate)=>{
      return (a.cc > b.cc)?1:-1;
    });
    const popular = ["EUR", "USD"];
        
    popular.forEach(element => {
      let i=0;
      for (i=0; i<data.length; i++) {
        if (data[i].cc===element) {
          data.unshift(new Rate(data[i].txt, data[i].rate, element));
          data.splice(i+1,1);
          i=data.length;
        }
      }
    });
  }
}
