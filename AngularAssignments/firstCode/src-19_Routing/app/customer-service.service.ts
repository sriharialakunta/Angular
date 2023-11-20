import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customers = [
    { id: '1', name: 'Sri', email: 'sri@gmail.com' },
    { id: '2', name: 'Hari', email: 'hari@hotmail.com' },
    { id: '3', name: 'Srihari', email: 'srihari@wipro.com' }
  ];

  getCustomers() {
    return this.customers;
  }

  getCustomerById(id: string) {
    return this.customers.find(customer => customer.id === id);
  }
}
