import { UserService } from './../../Service/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {
  @Input() private isLogin: boolean;
  private registerBtn = false;
  constructor(private userService: UserService, private route: Router) { }
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
      this.gotoDashboard();
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
      this.gotoDashboard();
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
    console.log(this.userService.loggedIn);
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe();
  }

  gotoDashboard() {
    // this.getUserInfo();
    this.route.navigate(['/user-profile']);
  }
}
