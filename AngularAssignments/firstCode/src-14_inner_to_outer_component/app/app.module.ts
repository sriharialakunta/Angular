import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from '../users/users.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
