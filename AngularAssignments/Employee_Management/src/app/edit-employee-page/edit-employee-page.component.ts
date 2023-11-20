import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesListService } from '../employees-list-page/employees-list-page.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee-page',
  templateUrl: './edit-employee-page.component.html',
  styleUrls: ['./edit-employee-page.component.css']
})
export class EditEmployeePageComponent {
  loginForm!: FormGroup;
  simple: any;

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
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.route.params.subscribe(params => {
        const employeeId = params['id']; // Assuming the route parameter name is 'id'
        console.log('Employee ID:', employeeId);
  
        this.update.editEmployee(this.loginForm.value,employeeId)
        .subscribe((response: any) => this.simple =response);
        console.log('Updated successfully!');
        this.router.navigate(['/employeesList']).then(() => {
          window.location.reload();
        });});

    }
  }
}