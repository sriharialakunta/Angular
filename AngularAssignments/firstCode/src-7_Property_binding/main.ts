import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1><br>
    <p>{{message}} From Interpolation</p> <!-- Interpolation syntax -->
    <p [textContent]="message"></p><!-- Property binding syntax -->
    <button [disabled]="isDisabled">Click me</button><br>
    
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
  message: string = 'hii Sri!';
  isDisabled: boolean = false;
}

bootstrapApplication(App);
