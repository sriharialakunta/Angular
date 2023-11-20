import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  emps: any;
  empls: Employee[] = []; 
  users: any [] =[];
  names: any;
  constructor(private e1: EmployeeService) {}
  ngOnInit() {
   
    this.e1.getEmployees().subscribe(msg => this.emps = msg);
    this.e1.getUserFromFakeAPI().subscribe((u: any) => this.users = u);
    this.e1.getEmployeess().subscribe(data => this.empls = data);
    this.e1.getEmployeesNames().subscribe(name => this.names = name);
  }
}
