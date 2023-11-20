import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AllowNavigationGuard } from './allow-navigation.guard';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AllowNavigationGuard] },
  { path: 'customers', component: CustomersComponent, canActivate: [AllowNavigationGuard] },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



