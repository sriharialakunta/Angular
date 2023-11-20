import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-list-page',
  templateUrl: './employees-list-page.component.html',
  styleUrls: ['./employees-list-page.component.css']

})
export class EmployeesListPageComponent {
    simple :any;
    employees :Employee[]=[];
    searchTerm: string = '';
    constructor(private empListService: EmployeesListService,private router: Router) {}

      ngOnInit() {
      return this.empListService.getEmployees().subscribe(s => this.employees = s);
      }
      deleteEmployee(id:number){
      this.empListService.deleteEmployee(id).subscribe((response: any) => this.simple =response);
      this.router.navigate(['/employeesList'])
      .then(() => {
        window.location.reload();
      });
     }
  
}

@Injectable()
export class EmployeesListService {
    
    private path = 'http://localhost:9090/employees';
    // private inMemoryPath: string = '/api/employees';
    emps :Employee[]=[];
    employees :any;
    constructor(private http: HttpClient) {}

    getEmployees() {
      return this.http.get<Employee[]>(this.path);
    }
    addEmployee(emp : Employee){
      return this.http.post<Employee>(`${this.path}/addEmployee`,emp);
    }

    editEmployee(emp: Employee,id : number) {
      return this.http.put<Employee>(`${this.path}/editEmployee/${id}`,emp);
    }

    deleteEmployee(id:number){
      return this.http.delete(`${this.path}/deleteEmployee/${id}`);
    }

    getEmployeeById(id: number):  Observable<Employee>  {
      return this.http.get<Employee>(`${this.path}/${id}`);
    }
  
}
