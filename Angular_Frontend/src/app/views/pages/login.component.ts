import { Component } from '@angular/core';
// import { Forms } from '@angular/forms';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor() { }

  login(l) {
    console.log(l.value);
  }
}
