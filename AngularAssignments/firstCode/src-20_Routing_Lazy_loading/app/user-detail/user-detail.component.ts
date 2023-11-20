import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: string | undefined;
  userName: string | undefined;

  users: any[] = [
    { id: 1, name: 'neel' },
    { id: 2, name: 'sriram' },
    { id: 3, name: 'sai' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.userName = this.getUserName(params['id']);
    });
  }

  getUserName(id: string): string {
    const user = this.users.find(u => u.id === parseInt(id, 10));
    return user ? user.name : '';
  }
}

