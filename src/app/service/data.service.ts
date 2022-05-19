import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  transactions() {
    return [
      {
        Date: '7 Oct 2020',
        Time: '10:24 AM',
        Amount: '₹3000',
        Type: 'pay',
        Id: 'A1234156256787382783899',
        isRequested: false,
      },
      {
        Date: '18 Nov 2020',
        Time: '10:24 AM',
        Amount: '₹250',
        Type: 'pay',
        Id: 'A1234156256787382783899',
        isRequested: true,
      },
      {
        Date: '19 Oct 2020',
        Time: '10:24 AM',
        Amount: '₹250',
        Type: 'collect',
        Id: 'A1234156256787382783899',
        isRequested: false,
      },
      {
        Date: '19 Oct 2020',
        Time: '10:24 AM',
        Amount: '₹250',
        Type: 'collect',
        Id: 'A1234156256787382783899',
        isRequested: true,
      }];
  }
}
