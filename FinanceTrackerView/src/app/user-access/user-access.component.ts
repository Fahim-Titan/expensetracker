import { UserService } from './../../Service/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatInput } from '@angular/material/input';



@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {
  private isLogin = false;
  private registerBtn = false;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.isLogin = this.userService.loggedIn;
  }

  register(r) {
    // calling service
    this.userService.register(r.value)
    .subscribe(response => {
      localStorage.setItem('token', response['token']);
      this.userService.loggedIn = true;
      this.isLogin = true;
    }, error => {
      alert('an error occured');
    });
  }

  login(f) {
    // calling service
    this.userService.loginUser(f.value)
      .subscribe(response => {
      localStorage.setItem('token', response['token']);
      this.userService.loggedIn = true;
      this.isLogin = true;
    }, error => {
      alert('an unexpected error occured');
    });
    // testing the forms
    // console.log(JSON.stringify(f.value));
  }

  logout() {
    this.userService.loggedIn = false;
    this.userService.logout();
    this.isLogin = false;
    console.log('logout');
  }

  getUserInfo(f) {
    this.userService.getUserInfo(f).subscribe();
  }
}
