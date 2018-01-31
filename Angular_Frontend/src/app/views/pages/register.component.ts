import { Component } from '@angular/core';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor() { }

  register(r) {
    console.log(JSON.stringify(r.value));
  }
}
