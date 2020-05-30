import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      console.log('usuarios: ', response);
      this.users = response.data;
    });

  }
}
