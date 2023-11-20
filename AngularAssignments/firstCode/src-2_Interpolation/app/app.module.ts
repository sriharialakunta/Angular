import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { HelloComponent } from '../hello/hello.component';
import { SumPipe } from '../sum.pipe';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [CommonModule, BrowserModule, SumPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  name: string = 'Still Loading......';
  numb: number = 11.231;
}
