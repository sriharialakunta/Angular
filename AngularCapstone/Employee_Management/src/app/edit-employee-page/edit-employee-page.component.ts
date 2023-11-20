import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesListService } from '../employees-list-page/employees-list-page.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-employee-page',
  templateUrl: './edit-employee-page.component.html',
  styleUrls: ['./edit-employee-page.component.css']
})
export class EditEmployeePageComponent {
  loginForm!: FormGroup;
  simple: any;
  emp!:Employee;
  employeeId!: number;

  constructor(private formBuilder: FormBuilder,
    private update: EmployeesListService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name:['', [Validators.required]],
      location:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
    this.getEmployee();
  }
  getEmployee() {
    this.route.params.subscribe(params => {
      this.employeeId = params['id']; 
    this.update.getEmployeeById(this.employeeId).subscribe(r=>this.emp=r);
  });}
  onSubmit() {
    if (this.loginForm.valid) {
      // this.route.params.subscribe(params => {
      //   const employeeId = params['id']; // Assuming the route parameter name is 'id'
        this.update.editEmployee(this.loginForm.value,this.employeeId)
        .subscribe((response: any) => this.simple =response);
        console.log('Updated successfully!');
        this.router.navigate(['/employeesList']).then(() => {
          window.location.reload();
        });
      // });

    }
  }
}