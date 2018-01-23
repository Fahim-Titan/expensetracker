import { UserService } from './../../Service/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {
  private isLogin: boolean;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.isLogin = this.userService.loggedIn;
  }

  login(f) {
    // calling service
    this.userService.loginUser(f.value)
      .subscribe(response => {
      localStorage.setItem('token', response['token']);
      this.userService.loggedIn = true;
      // console.log(response);
    }, error => {
      alert('an unexpected error occured');
    });
    // testing the forms
    // console.log(JSON.stringify(f.value));
  }

  logout() {
    this.userService.loggedIn = false;
    this.userService.logout();
  }
}
