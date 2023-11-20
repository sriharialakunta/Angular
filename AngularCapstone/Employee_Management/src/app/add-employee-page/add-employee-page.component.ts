import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesListService } from '../employees-list-page/employees-list-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.css']
})
export class AddEmployeePageComponent {
  loginForm!: FormGroup;
  simple: any;

  constructor(private formBuilder: FormBuilder,
    private addEmployee: EmployeesListService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name:['', [Validators.required]],
      location:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.addEmployee.addEmployee(this.loginForm.value).subscribe((response: any) => this.simple =response);
      console.log('added successful!');
      this.router.navigate(['/employeesList'])
      .then(() => {
        window.location.reload();
      });
    }
  }
}