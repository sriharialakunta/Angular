import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllowNavigationGuard implements CanActivate {
  allowNavigationToCustomers: boolean = false;
  allowNavigationToUsers: boolean = false;

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (this.router.url.includes('/customers')) {
      if (this.allowNavigationToUsers) {
        return true;
      } else {
        alert('Please check the checkbox to navigate to Users.');
        return false;
      }
    } else if (this.router.url.includes('/users')) {
      if (this.allowNavigationToCustomers) {
        return true;
      } else {
        alert('Please check the checkbox to navigate to Customers.');
        return false;
      }
    }

    return true;
  }

  setAllowNavigationToCustomers(allow: boolean) {
    this.allowNavigationToCustomers = allow;
    if (!allow && this.router.url.includes('/users')) {
      alert('You are not allowed to leave the Users page.');
    }
  }

  setAllowNavigationToUsers(allow: boolean) {
    this.allowNavigationToUsers = allow;
    if (!allow && this.router.url.includes('/customers')) {
      alert('You are not allowed to leave the Customers page.');
    }
  }
}


