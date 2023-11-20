import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Employee } from './employee';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <div *ngIf='1>10'>
    <table border='1'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let employee of employees">
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
      </tr>
    </tbody>
  </table>
  </div>
  <br>
  <table border='1'>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
   <tr *ngFor="let employee of empls">
      <td>{{ employee.id }}</td>
      <td>{{ employee.name }}</td>
    </tr>
    </tbody>
    </table>
    <div>
    <label for="numberInput">Enter a number:</label>
    <input id="numberInput" type="number" #some (input)="selectNumber(some.value)"/>
    </div>
  <div [ngSwitch]="selectedNumber">
    <div *ngSwitchCase="1" style="background-color: red; color: white;">Red</div>
    <div *ngSwitchCase="2" style="background-color: green; color: white;">Green</div>
    <div *ngSwitchCase="3" style="background-color: blue; color: white;">Blue</div>
    <div *ngSwitchCase="4" style="background-color: yellow;">Yellow</div>
    <div *ngSwitchDefault>Invalid option</div>
  </div>
  `,
})
export class App {
  name = 'Angular';

  employees: any[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Smith' },
  ];
  empls: Employee[] = [
    { id: 1, name: 'venu' },
    { id: 2, name: 'sri' },
    { id: 3, name: 'sudheer' },
  ];

  selectedNumber: number = 0;
  selectNumber(num: string): void {
    this.selectedNumber = parseInt(num);
  }
}

bootstrapApplication(App);
