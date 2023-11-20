import { Component } from '@angular/core';
import { AllowNavigationGuard } from '../allow-navigation.guard';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers: any[] = [
    { id: 1, name: 'sriveni' },
    { id: 2, name: 'sreeram' },
    { id: 3, name: 'anusha' }
  ];

  constructor(private allowNavigationGuard: AllowNavigationGuard) { }

  toggleAllowNavigationToUsers(event: any) {
    const checked = event.target.checked;
    this.allowNavigationGuard.setAllowNavigationToUsers(checked);
  }
}




