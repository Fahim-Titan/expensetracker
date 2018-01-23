import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AssetService {
  private root = 'http:localhost:5000/api';
  private url = '/asset';
  constructor(private http: HttpClient) { }

  createAccount(f) {
    this.http.post(this.root + this.url + '/create', f,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }

  getAccountDetails(f) {
    this.http.post(this.root + this.url + '/details', f,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }

  updateAccount(f) {
    this.http.post(this.root + this.url + '/update', f,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }

  deleteAccount(f) {
    this.http.post(this.root + this.url + '/delete', f,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }
}
