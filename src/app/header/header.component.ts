import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor() { }
  @Input() USD:string = "--";
  @Input() EUR:string = "--";

  ngOnInit(): void {
    // console.log(this.USD);
    // console.log(this.EUR);
  }

}
