import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  customers: any[] = [
    { id: 1, name: 'sriveni' },
    { id: 2, name: 'sreeram' },
    { id: 3, name: 'anusha' }
  ];

  customerId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.customerId = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
  }
  getCustomerName(customerId: number): string {
    const customer = this.customers.find(cust => cust.id === customerId);
    return customer ? customer.name : '';
  }

  navigateToCustomers() {
    this.router.navigate(['/customers']);
  }
}






