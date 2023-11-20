import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        name: "Srihari",
        location: "Bangalore",
        email: "Srihari@gmail.com",
        mobile: "9927463543"
      },
      {
        name: "Hari",
        location: "Hyderabad",
        email: "hari@gmail.com",
        mobile: "7367534521"
      },
      {
        name: "Sudheer",
        location: "Chennai",
        email: "sudheer@gmail.com",
        mobile: "9975287450"
      },
      {
        name: "Venu",
        location: "Bangalore",
        email: "venu@gmail.com",
        mobile: "7993888787"
      }
    ];
    return { employees };
  }
}
