import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFilterPipe } from '../user-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UserFilterPipe],
  imports: [CommonModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
