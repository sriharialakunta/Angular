import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

@NgModule({
  // imports: [BrowserModule, HttpClientModule,
  //   HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  // ],
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [EmployeeService],
})
export class AppModule {}
