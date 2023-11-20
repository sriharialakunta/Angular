import { Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Users } from './users';

@Injectable()
export class UsersService {
  constructor(private d1: DepartmentService) {}
  users: Users[] = [];

  getUsers(): Users[] {
    this.users = [
      { id: 1, name: 'venu', location: 'sap' },
      { id: 2, name: 'sri', location: 'sap' },
      { id: 3, name: 'sudheer', location: 'pdg' },
    ];
    return this.users;
  }
  getDepartmentMsg(): string {
    return this.d1.sendToUsersService();
  }
}
