import { Component, OnInit } from '@angular/core';
import { LocalDataSource, Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  // source: LocalDataSource;
  // data= [
  //   {
  //     id: 1,
  //     name: 'Leanne Graham',
  //     username: 'Bret',
  //     email: 'Sincere@april.biz'
  //   },
  //   {
  //     id: 2,
  //     name: 'Ervin Howell',
  //     username: 'Antonette',
  //     email: 'Shanna@melissa.tv'
  //   },
  //   {
  //     id: 11,
  //     name: 'Nicholas DuBuque',
  //     username: 'Nicholas.Stanton',
  //     email: 'Rey.Padberg@rosamond.biz'
  //   }
  // ];

  // settings = {
  //   columns: {
  //     id: {
  //       title: 'ID'
  //     },
  //     name: {
  //       title: 'Full Name'
  //     },
  //     username: {
  //       title: 'Star Name'
  //     },
  //     email: {
  //       title: 'Email'
  //     }
  //   }
  // };
  constructor() {
    // this.source = new LocalDataSource(this.data)
   }

  ngOnInit() {
  }

  addAsset(a) {
    console.log(a.value);
    // this.data.push( {
    //   id : 2,
    //   name: a.asset,
    //   username : 'sadf',
    //   email : 'sadf'
    // });
  }

  showAssetInformation() {

  }

}
