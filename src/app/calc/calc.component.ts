import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() data:any;

  s1:any;
  s2:any;
  v1:number = 0;
  v2:number = 0;
  currency1:any;
  currency2:any;
  ready:boolean = false;

  ngOnInit(): void {
     this.s1 = "USD"
     this.s2 = "UAH"
  }

  ngOnChanges() {
    //console.log("ngOnChanges");
    if (this.data.length>0) {
      this.currency1 = this.data.find((item:any)=>item.cc===this.s1);
      this.currency2 = this.data.find((item:any)=>item.cc===this.s2);
      //console.log(this.currency1);
      //console.log(this.currency2);
      this.v1=1;
      this.onchangeVA();
      this.ready=true;
    }
  }

  onchangeVA() {
    //console.log("onchangeVA");
    this.v2=Math.round(((this.currency1.rate*this.v1)/(this.currency2.rate))*10000)/10000;
  }
  onchangeVB() {
    //console.log("onchangeVB");
    this.v1=Math.round((this.currency2.rate*this.v2)/(this.currency1.rate)*10000)/10000;
  }


  onchangeA() {
    //console.log("onchangeA");
    this.currency1 = this.data.find((item:any)=>item.cc===this.s1);
    this.onchangeVA();
  }
  onchangeB() {
    //console.log("onchangeB");
    this.currency2 = this.data.find((item:any)=>item.cc===this.s2);
    this.onchangeVB();
  }
}
