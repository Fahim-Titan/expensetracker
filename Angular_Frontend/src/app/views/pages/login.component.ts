import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'services/user.service';
// import { Forms } from '@angular/forms';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private loginError = false;
  private loginText = '';
  // constructor() { }
  constructor(private _userService: UserService, private router: Router) { }

  login(l) {
    console.log(l.value);
    this._userService.loginUser(l.value).
    subscribe(response => {
      localStorage.setItem('token', response['token']);
      this.router.navigate(['dashboard']);
    },
    (error: Response) => {
      this.loginError = true;
      if (error.status === 400) {
        this.loginText = 'Email Format or Password is not correct';
      }
      if (error.status === 401) {
        this.loginText = 'Password is not correct';
      }
      if (error.status === 404) {
        this.loginText = 'User does not exist';
      }
    });
  }
}
