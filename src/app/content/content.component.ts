import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data:any = [];

  constructor(private api: DataService) { }

  ngOnInit(): void {
    this.data = this.api.transactions();
  }

  public transactionDates = new Set<String>();
  dates(date: any) {
    if(this.transactionDates.has(date)) {
      return true;
    } else {
      this.transactionDates.add(date);
      return false;
    }
  }

}
