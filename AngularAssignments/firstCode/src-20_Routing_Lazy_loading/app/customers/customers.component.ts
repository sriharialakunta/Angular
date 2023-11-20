import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers: any[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];
}
