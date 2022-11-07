import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  constructor() { }
  @Input() data:any;
  s1:any;
  s2:any;
  v1:number = 0;
  v2:number = 0;
  currency1:any;
  currency2:any;

  ngOnInit(): void {
     console.log(this.data)
     this.s1 = "UAH"
     this.s2 = "USD"
    //  this.currency1 = this.data.find((item:any)=>item.cc==="UAH");
    //  this.currency2 = this.data.find((item:any)=>item.cc==="USD");
    //  this.v2=Math.round(((this.currency1.rate*this.v1)/(this.currency2.rate))*10000)/10000;
     //this.v2=Math.round((this.currency2.rate*this.v2)/(this.currency1.rate)*10000)/10000;
    // console.log("this.data")
    // console.log(this.data)
  }

  onchangeA() {
    // console.log("onchangeA");
    // console.log(this.v1);
    // console.log(this.v2);
    // console.log(this.s1);
    // console.log(this.s2);
    // console.log("----");
    this.currency1 = this.data.find((item:any)=>item.cc===this.s1);
    this.currency2 = this.data.find((item:any)=>item.cc===this.s2);
    this.v2=Math.round(((this.currency1.rate*this.v1)/(this.currency2.rate))*10000)/10000;
  }
  onchangeB() {
    // console.log("onchangeB");
    // console.log(this.v1);
    // console.log(this.v2);
    // console.log(this.s1);
    // console.log(this.s2);
    // console.log("----");
    // console.log(this.data);
    this.currency1 = this.data.find((item:any)=>item.cc===this.s1);
    this.currency2 = this.data.find((item:any)=>item.cc===this.s2);
    // console.log("res");
    // console.log(this.currency2);
    this.v1=Math.round((this.currency2.rate*this.v2)/(this.currency1.rate)*10000)/10000;
  }



}
