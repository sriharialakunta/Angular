import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  // templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  template: `
    <h1>Hello from User Component!</h1>
    <p>Simple para</p>
    <h2>List of Users</h2>
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
  `,
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  users: string[] = ['jai', 'sri', 'ram', 'ki', 'jai'];
}
