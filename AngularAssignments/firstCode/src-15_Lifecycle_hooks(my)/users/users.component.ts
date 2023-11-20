import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() country: string = '';

  ngOnInit() {
    console.log('UsersComponent - ngOnInit');
  }

  ngOnDestroy() {
    console.log('UsersComponent - ngOnDestroy');
  }
}
