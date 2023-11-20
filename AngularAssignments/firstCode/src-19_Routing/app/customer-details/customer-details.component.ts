import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private custService: CustomerServiceService
  ) { } 

  ngOnInit() {
    this.route.params.subscribe(params => {
      const customerId = params['id'];
      this.user = this.custService.getCustomerById(customerId);
    });
  }
}