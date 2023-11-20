import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AllowNavigationGuard } from './allow-navigation.guard';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CustomersComponent,
    UserDetailComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AllowNavigationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
