import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeePageComponent } from './edit-employee-page/edit-employee-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { EmployeesListPageComponent, EmployeesListService } from './employees-list-page/employees-list-page.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/employeeManagementSystem', pathMatch: 'full' },
  { path: 'editEmployees/:id', component: EditEmployeePageComponent },
  { path: 'addEmployees', component: AddEmployeePageComponent},
  { path: 'employeesList', component: EmployeesListPageComponent},
  { path: 'employeeManagementSystem', component: MainPageComponent},
  { path: 'employeedetails/:id', component: EmployeeDetailsComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
