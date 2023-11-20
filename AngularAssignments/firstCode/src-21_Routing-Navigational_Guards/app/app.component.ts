import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllowNavigationGuard } from './allow-navigation.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private allowNavigationGuard: AllowNavigationGuard) { }

  navigateToCustomers() {
    if (this.router.url.includes('/users')) {
      return this.allowNavigationGuard.canActivate();
    } else {
      return true;
    }
  }
}

