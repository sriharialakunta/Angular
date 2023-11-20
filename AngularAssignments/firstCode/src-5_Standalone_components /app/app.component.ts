import { Component, OnInit } from '@angular/core';
import { SumPipe } from '../sum.pipe';

@Component({
  selector: 'app-app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SumPipe],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
