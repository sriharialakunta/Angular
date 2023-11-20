import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentService {
  constructor() {}
  departments: any[] = [];

  getDepartments(): any[] {
    this.departments = [
      { id: 1, deptName: 'MECH' },
      { id: 2, deptName: 'ECE' },
      { id: 3, deptName: 'CSC' },
    ];
    return this.departments;
  }
  sendToUsersService(): string {
    return '<--Hello From Department Service-->';
  }
}
