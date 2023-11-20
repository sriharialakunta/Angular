import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from '../users/users.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
