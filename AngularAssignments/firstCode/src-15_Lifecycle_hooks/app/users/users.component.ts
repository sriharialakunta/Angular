import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() country: string='';
  @Output() userSelected = new EventEmitter<string>();

  users: string[] = ['User 1', 'User 2', 'User 3'];;

  ngOnInit() {
    console.log('ngOnInit called in UsersComponent');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called in UsersComponent');
    console.log(changes);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called in UsersComponent');
  }

  selectUser(user: string) {
    this.userSelected.emit(user);
  }
}
