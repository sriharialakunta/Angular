import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country: string = ''; // Initialize the country property

  selectedUser: string = '';

  ngOnInit() {
    console.log('ngOnInit called in AppComponent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called in AppComponent');
  }
  handleUserSelection(user: string) {
    this.selectedUser = user;
  }

  updateCountry(event: any) {
    this.country = event.target.value;
    console.log('Country changed:', this.country);
  }
  

  
}
