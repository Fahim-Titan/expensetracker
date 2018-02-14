import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  private loginError = false;
  private loginErrorText;
  constructor(private _userService: UserService, private router: Router) { }

  register(r) {
    console.log(JSON.stringify(r.value));
    this._userService.register(r.value).subscribe(
      res => {
        localStorage.setItem('token', res['token']);
        this.router.navigate(['dashboard']);
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
