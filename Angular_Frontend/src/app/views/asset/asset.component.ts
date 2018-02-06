import { AssetService } from './../../../services/asset.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource, Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  private assetList: any;
  constructor(private _assetService: AssetService) {
    // this.source = new LocalDataSource(this.data)
  }

  ngOnInit() {
    this.showAssetInformation();
  }

  addAsset(a) {
    console.log(a.value);
    this._assetService.CreateAsset(a.value).subscribe();
    this.showAssetInformation();
  }

  showAssetInformation() {
    this._assetService.GetAssetList().subscribe(
      response => {
        this.assetList = '' ,
        this.assetList = response
      }
    );
  }

  delete(id) {
    console.log(id);
    this._assetService.DeleteAsset(id).subscribe();
    this.showAssetInformation();
  }

}
