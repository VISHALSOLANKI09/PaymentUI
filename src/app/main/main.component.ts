import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data = [{
    "17 Oct 2020": [{
      "Amount": "₹3000",
      "Pay": "Sent",
      "Request": "NA",
      "TransactionID": "A1234567890123456790123"
    }],
    "18 Nov 2020": [{
      "Amount": "₹250",
      "Pay": "NA",
      "Request": "Recieved"
    }], 
    "19 Nov 2020": [{
      "Amount": "₹250",
      "Pay": "Recieved",
      "Request": "NA",
      "TransactionID": "C89076543123456790987947"
    },{
      "Amount": "₹400",
      "Pay": "NA",
      "Request": "Recieved",
    }]
  }]

  constructor() { }

  ngOnInit(): void {
    var keys = Object.values(this.data[0]);
    var values = Object.values(this.data[0]);
    // console.log(values[2]);
    // for(let i = 0; i < values[2].length; i++) {
    //   console.log(values[i][0]);
    // }
  }
}
