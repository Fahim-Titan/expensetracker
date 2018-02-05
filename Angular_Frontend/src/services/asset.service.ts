import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AssetService {
  private root = 'http://localhost:5000/api';
  private url = '/asset';
  constructor(private http: HttpClient) { }

  CreateAsset(f) {
    return this.http.post(this.root + this.url + '/create', JSON.stringify(f), {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')
        .set('authorization', this.getToken())
    });
  }

  // GetAssetDetails(f) {
  //   this.http.post(this.root + this.url + '/details', f, {
  //     headers: new HttpHeaders().set('Content-Type', 'Application/Json')
  //   });
  // }

  GetAssetList() {
    return this.http.post(this.root + this.url + '/list', null, {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')
        .set('authorization', this.getToken())
    })
  }

  UpdateAsset(f) {
    this.http.post(this.root + this.url + '/edit', JSON.stringify(f), {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')
        .set('authorization', this.getToken())
    });
  }

  DeleteAsset(f) {
    return this.http.post(this.root + this.url + '/delete', f, {
      headers: new HttpHeaders().set('Content-Type', 'Application/Json')
        .set('authorization', this.getToken())
    });
  }


  getToken() {
    return 'bearer ' + localStorage.getItem('token');
  }
}
