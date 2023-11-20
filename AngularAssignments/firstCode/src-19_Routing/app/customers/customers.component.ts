import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }
}
