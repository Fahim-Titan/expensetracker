import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'services/user.service';
// import { Forms } from '@angular/forms';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private loginError = false;
  private loginErrorText = '';
  // constructor() { }
  constructor(private _userService: UserService, private router: Router) { }

  login(l) {
    if (l.valid) {
      this.processLogin(l);
    }
    // console.log(l);
    // console.log(l.valid);
    // l.resetForm();
  }

  processLogin(l) {
    // console.log(l.value);
    this._userService.loginUser(l.value).
    subscribe(response => {
      localStorage.setItem('token', response['token']);
      localStorage.setItem('userName', response['userName']);
      this.router.navigate(['dashboard']);
      console.log(response['userName']);
    },
    (error: Response) => {
      this.loginError = true;
      if (error.status === 400) {
        this.loginErrorText = 'Email Format or Password is not correct';
      }
      if (error.status === 401) {
        this.loginErrorText = 'Password is not correct';
      }
      if (error.status === 404) {
        this.loginErrorText = 'User does not exist';
      }
    });

  }
}
