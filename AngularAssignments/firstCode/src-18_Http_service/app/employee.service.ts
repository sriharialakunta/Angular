import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, tap } from 'rxjs';

@Injectable()
export class EmployeeService {
  private path = 'http://localhost:3002/employees';
  private paths = 'assets/employee.json';
  private httpsPath = 'https://reqres.in/api/users/2';
  private inMemoryPath: string = '/api/employees';

  constructor(private s1: HttpClient) {}
  getEmployees() {
    return this.s1.get(this.path);
  }
  getUserFromFakeAPI(): any {
    return this.s1.get(this.httpsPath);
  }
  getEmployeess(): Observable<Employee[]> {
    return this.s1.get<Employee[]>(this.paths);
  }
  getEmployeesNames() {
    return this.s1.get(this.inMemoryPath);
  }
}
