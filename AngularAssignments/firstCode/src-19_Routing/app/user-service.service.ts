import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    { id: '1', name: 'Sri', email: 'sri@gmail.com' },
    { id: '2', name: 'Hari', email: 'hari@hotmail.com' },
    { id: '3', name: 'Srihari', email: 'srihari@wipro.com' }
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }
}
