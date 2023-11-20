import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeesListPageComponent, EmployeesListService } from './employees-list-page/employees-list-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeePageComponent } from './edit-employee-page/edit-employee-page.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    EmployeesListPageComponent,
    AddEmployeePageComponent,
    EditEmployeePageComponent,
    EmployeeFilterPipe,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [EmployeesListService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
