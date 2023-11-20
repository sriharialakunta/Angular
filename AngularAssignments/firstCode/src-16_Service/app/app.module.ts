import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { UsersComponent } from '../users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from '../users.service';
import { DepartmentService } from '../department.service';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [CommonModule, BrowserModule],
  providers: [UsersService, DepartmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
