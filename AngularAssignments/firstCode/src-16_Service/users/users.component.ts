import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private u1: UsersService, private d1: DepartmentService) {}

  allUsers: Users[] = [];
  departments: any[] = [];
  msg!: string;
  ngOnInit() {
    this.allUsers = this.u1.getUsers();
    this.departments = this.d1.getDepartments();
    this.msg = this.u1.getDepartmentMsg();
  }

  users: Users[] = [
    { id: 1, name: 'venu', location: 'sap' },
    { id: 2, name: 'sri', location: 'sap' },
    { id: 3, name: 'sudheer', location: 'pdg' },
  ];
  emptyUsers: Users[] = [];
}
