import { Component, Input, OnChanges } from '@angular/core';
import { Rate } from '../models/RateClass';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnChanges {

  constructor() { }

  @Input() data:Rate[]=[]

  rates:Rate[] = [ new Rate("Curr name1", 1, "---")];
  currency1:Rate = this.rates[0];
  currency2:Rate = this.rates[0];
  sel1:string=this.currency1.cc;
  sel2:string=this.currency2.cc;;
  inpt1:number = 1;
  inpt2:number = 1;

  ready:boolean = false;


  ngOnChanges() {
    if(this.data.length>1){
      this.rates = this.data;

      this.currency1=this.rates[1];
      this.currency2=this.rates[0];

      this.inpt1=1;
      this.sel1=this.currency1.cc;
      this.sel2=this.currency2.cc;
      this.onchangeVA();
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
