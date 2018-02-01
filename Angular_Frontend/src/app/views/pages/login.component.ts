import { Component } from '@angular/core';
import { UserService } from 'services/user.service';
// import { Forms } from '@angular/forms';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private loginError = false;
  private loginText = '';
  constructor() { }
  // constructor(private _userService: UserService) { }

  login(l) {
    console.log(l.value);
    // this._userService.loginUser(l.value).subscribe(response => {
    //   localStorage.setItem('token', response['token']);
    // }, error => {
    //   this.loginError = true;
    //   this.loginText = 'An Error has occured';
    // });
  }
}
