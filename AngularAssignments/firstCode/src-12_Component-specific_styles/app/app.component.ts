import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  Items: string[] = ['Cart', 'Mat', 'Cooler', 'Fan'];
  ngOnInit() {}
}
