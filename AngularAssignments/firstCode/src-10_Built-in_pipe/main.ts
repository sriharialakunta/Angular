import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <input type="text" [(ngModel)]="name"/>
    <table border=1>
    <thead>
      <tr>
        <th>Name (Uppercase)</th>
        <th>Name (Lowercase)</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users">
        <td>{{ user.name | uppercase }}</td>
        <td>{{ user.name | lowercase }}</td>
      </tr>
    </tbody>
  </table>
  <tr *ngFor="let user of users">
  <td>Salary: {{ user.salary | currency:'INR' }}</td>
  <td>DateOfJoin: {{ user.dateOfJoin | date }}</td></tr>
  `,
})
export class App {
  name = 'Angular';
  users: any[] = [
    { name: 'sri', salary: 49.99, dateOfJoin: new Date(2022, 2, 1) },
    { name: 'hari', salary: 49.99, dateOfJoin: new Date(2022, 3, 1) },
    { name: 'srihari', salary: 49.99, dateOfJoin: new Date(2022, 1, 1) },
    { name: 'venu', salary: 49.99, dateOfJoin: new Date(2022, 0, 31) },
  ];
}

bootstrapApplication(App);
