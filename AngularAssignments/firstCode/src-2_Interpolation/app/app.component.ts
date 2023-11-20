import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `
  //   <h1>Hello from {{name}}!</h1>
  //   <h2> This is Num : {{num}}</h2>
  //   <h3> Tell some thing... </h3>
  //   <app-hello></app-hello>
  //   <a target="_blank" href="https://angular.io/start">
  //     Learn more about Angular
  //   </a>
  // `,
})
export class AppComponent implements OnInit {
  constructor() {}
  datenow: number = Date.now();
  name: string = 'Angular';
  num: number = 12.234;
  ngOnInit() {}
}
