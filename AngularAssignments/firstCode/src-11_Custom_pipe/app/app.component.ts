import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  users = [{ name: 'Hari' }, { name: 'Sri' }, { name: 'Srihari' }];
  searchTerm: string = '';
  ngOnInit() {}
}
