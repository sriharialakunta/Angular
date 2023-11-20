import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllowNavigationGuard } from '../allow-navigation.guard';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = [
    { id: 1, name: 'sudheer' },
    { id: 2, name: 'venu' },
    { id: 3, name: 'srihari' }
  ];

  constructor(private router: Router, private allowNavigationGuard: AllowNavigationGuard) { }

  toggleAllowNavigationToCustomers(event: any) {
    const checked = event.target.checked;
    this.allowNavigationGuard.setAllowNavigationToCustomers(checked);
  }
}











