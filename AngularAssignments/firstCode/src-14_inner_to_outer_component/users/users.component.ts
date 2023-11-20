import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  users: string[] = ['Venu', 'Sudheer', 'Prakash'];
  @Output() userClicked = new EventEmitter<string>();

  onUserClick(user: string) {
    this.userClicked.emit(user);
  }
}
