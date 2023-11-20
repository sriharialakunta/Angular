import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  country: string = '';

  ngOnInit() {
    console.log('AppComponent - ngOnInit');
  }

  ngOnChanges() {
    console.log('AppComponent - ngOnChanges');
  }

  ngOnDestroy() {
    console.log('AppComponent - ngOnDestroy');
  }
}
