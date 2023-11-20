import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  users: Users[] = [
    { id: 1, name: 'venu', location: 'sap' },
    { id: 2, name: 'sri', location: 'sap' },
    { id: 3, name: 'sudheer', location: 'pdg' },
  ];
  emptyUsers: Users[] = [];
}
