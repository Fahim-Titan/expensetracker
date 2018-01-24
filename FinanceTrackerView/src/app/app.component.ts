import { UserService } from './../Service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn: boolean;
  constructor(private userService: UserService) {
   this.loggedIn = this.userService.isUserLoggedIn();
  }
}
