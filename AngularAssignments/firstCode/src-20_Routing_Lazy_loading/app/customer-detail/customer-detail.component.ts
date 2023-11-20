import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerId: string | undefined;
  customerName: string | undefined;

  customers: any[] = [
    { id: 1, name: 'satya' },
    { id: 2, name: 'vastav' },
    { id: 3, name: 'ram' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerId = params['id'];
      this.customerName = this.getCustomerName(params['id']);
    });
  }

  getCustomerName(id: string): string {
    const customer = this.customers.find(c => c.id === parseInt(id, 10));
    return customer ? customer.name : '';
  }
}


