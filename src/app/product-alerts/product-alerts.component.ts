import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts', //defines name of component when rendered as HTML on the overall page. 
  templateUrl: './product-alerts.component.html', 
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit { //deals with functionality of the component.
  @Input() product; //indicates that property value passes in from components parent.
  @Output() notify = new EventEmitter(); //allows product alert component to output an event when the value of the notify product changes.
  
  constructor() { }

  ngOnInit() {
  }

}