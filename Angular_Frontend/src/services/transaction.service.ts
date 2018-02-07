import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionService {
  private root = 'http://localhost:5000/api';
  private url = '/transaction';
  constructor(private http: HttpClient) { }

  CreateTransaction(t) {
    return this.http.post(this.root + this.url + '/create', JSON.stringify(t), {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')
        .set('authorization', this.getToken())
    });
  }

  GetTransactionHistory(t) {
    return this.http.post(this.root + this.url + '/list', t, {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')
        .set('authorization', this.getToken())
    });
  }

  UpdateTransaction(t) {
    return this.http.post(this.root + this.url + '/Edit', t, {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')
    });
  }

  DeleteTransaction(t) {
    return this.http.post(this.root + this.url + '/delete', t, {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')
    });
  }

  getToken() {
    return 'bearer ' + localStorage.getItem('token');
  }
}
