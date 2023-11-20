import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>

    <button (click)="handleClick()">Click me</button><br>
    <input type="text" (input)="handleInputChange($event)"/><br>

    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
  counter: number = 0;

  handleClick() {
    this.counter++;
    console.log('Counter:', this.counter);
  }

  textValue: string = '';

  handleInputChange(event: any) {
    this.textValue = event.target.value;
    console.log('Text value:', this.textValue);
  }
}

bootstrapApplication(App);
