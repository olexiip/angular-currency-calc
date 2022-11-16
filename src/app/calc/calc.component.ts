import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Rate } from '../models/RateClass';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() data:Rate[]=[]

  rates:Rate[]=[ new Rate("Curr name1", 1, "---")];
  currency1:Rate = this.rates[0];
  currency2:Rate = this.rates[0];
  sel1:string=this.currency1.cc;
  sel2:string=this.currency2.cc;;
  inpt1:number = 1;
  inpt2:number = 1;



  ready:boolean = false;

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.data.length>1){
      this.rates = this.data;
    
    
    this.rates.sort((a:Rate, b:Rate)=>{
      return (a.cc > b.cc)?1:-1;
    });
 
    const sortByPop = () => {
      const popular = ["EUR" ,"UAH", "USD"];

      popular.forEach(element => {
        let i=0;
        for (i=0; i<this.rates.length; i++) {
          if (this.rates[i].cc===element) {
            this.rates.unshift(new Rate(this.rates[i].txt, this.rates[i].rate, element));
            this.rates.splice(i+1,1);
          i=this.rates.length;
          }
        }
      });
    }

    sortByPop();

    this.currency1=this.rates[0];
    this.currency2=this.rates[1];

    this.inpt1=1;
    this.sel1=this.currency1.cc;
    this.sel2=this.currency2.cc;
    this.onchangeVA();
    console.log(this.rates)
    console.log(this.currency1)
    console.log(this.currency2)
    this.ready=true;
    }
  }

  onchangeVA() {
    this.inpt2=Math.round(((this.currency1.rate*this.inpt1)/(this.currency2.rate))*10000)/10000;
  }
  onchangeVB() {
    this.inpt1=Math.round((this.currency2.rate*this.inpt2)/(this.currency1.rate)*10000)/10000;
  }

  onchangeA() {
    const c1 = this.rates.find((item:Rate)=>item.cc===this.sel1);
    if (c1) {
      this.currency1=c1;
    }
    this.onchangeVA();
  }
  onchangeB() {
    const c2 = this.rates.find((item:Rate)=>item.cc===this.sel2);
    if(c2) {
      this.currency2=c2;
    }
    this.onchangeVB();
  }
}
