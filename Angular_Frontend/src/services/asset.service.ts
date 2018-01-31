import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AssetService {
  private root = 'http:localhost:5000/api';
  private url = '/asset';
  constructor(private http: HttpClient) { }

  CreateAsset(f) {
    this.http.post(this.root + this.url + '/create', f,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }

  GetAssetDetails(f) {
    this.http.post(this.root + this.url + '/details', f,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }

  UpdateAsset(f) {
    this.http.post(this.root + this.url + '/update', f,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }

  DeleteAsset(f) {
    this.http.post(this.root + this.url + '/delete', f,  {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')});
  }
}
