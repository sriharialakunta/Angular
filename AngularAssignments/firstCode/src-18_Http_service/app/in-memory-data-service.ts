import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        name: "Srihari",
        location: "Bangalore",
        email: "ram@gmail.com",
        mobile: "9867512345"
      },
      {
        id: 2,
        name: "Hari",
        location: "Chennai",
        email: "raj@gmail.com",
        mobile: "7867534521"
      },
      {
        id: 3,
        name: "Sudheer",
        location: "Pune",
        email: "vinay@gmail.com",
        mobile: "9975287450"
      },
      {
        id: 4,
        name: "Venu",
        location: "Bangalore",
        email: "gaya3@gmail.com",
        mobile: "997578787"
      }
    ];
    return { employees };
  }
}
