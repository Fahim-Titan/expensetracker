import { AssetService } from './../../../services/asset.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource, Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  alerts: any = [];
  private assetList: any;
  constructor(private _assetService: AssetService) {
    // this.source = new LocalDataSource(this.data)
  }

  ngOnInit() {
    this.showAssetInformation();
    this.showNotification('success', 'table loaded', 2000);
  }

  addAsset(a) {
    console.log(a.value);
    this._assetService.CreateAsset(a.value).subscribe(
      res => {
        this.showAssetInformation();
        this.showNotification('success', 'New Asset added to the table', 5000);
      }
    );
  }

  delete(id) {
    console.log(id);
    this._assetService.DeleteAsset(id).subscribe(
      res => {
        this.showAssetInformation();
        this.showNotification('info', 'selected data is deleted', 5000);
      }
    );
  }

  showNotification(alertType: string, notificationMsg: string, duration: number) {
    this.alerts.push({
      type: alertType,
      msg: notificationMsg,
      timeout: 5000
    });
  }
  showAssetInformation() {
    this._assetService.GetAssetList().subscribe(
      response => {
        // this.assetList = '' ;
        this.assetList = response;
        // console.log(response);
      }
    );
  }
}
