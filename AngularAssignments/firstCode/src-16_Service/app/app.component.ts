import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: Users[] = [];
  constructor(private u1: UsersService) {}

  ngOnInit() {
    this.users = this.u1.getUsers();
  }
}
