import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {
  private root= 'http://localhost:5000/api';
  private url = '/token';
  public loggedIn= false;
  constructor(private http: HttpClient) { }
  loginUser(f) {
    console.log('from service' + JSON.stringify(f));
    return this.http.post(this.root + '/token/get',
                    JSON.stringify(f), {
                    headers: new HttpHeaders().set('Content-Type', 'Application/Json')
                  });
  }

  logout() {
    localStorage.removeItem('token');
  }

  register() {}

  getUserInfo(user) {
    return this.http.post(this.root + this.url + '/user', user,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }

  updateUserInfo(user) {
    this.http.post(this.root + this.url + '/update', user,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }

  deleteUserInfo(user) {
    this.http.post(this.root + this.url + '/delete', user,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }
}