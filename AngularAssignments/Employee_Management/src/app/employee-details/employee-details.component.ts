import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeesListService } from '../employees-list-page/employees-list-page.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  emp: Employee=new Employee;

  constructor(
    private route: ActivatedRoute,
    private service: EmployeesListService,
    private location: Location,
  ) { } 

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.service.getEmployeeById(id).subscribe(e => this.emp = e);
    });
  }

  goBack(): void {
    this.location.back();
  }

}