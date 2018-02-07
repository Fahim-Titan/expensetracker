import { AssetService } from './../../../services/asset.service';
import { TransactionService } from './../../../services/transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  private _showForm = false;
  private FormName= '';
  private assetDropDown: any;
  constructor(private _transactionService: TransactionService, private _assetService: AssetService) { }

  ngOnInit() {
    this._assetService.GetAssetList().subscribe(
      res => {
        this.assetDropDown = res;
      }
    )
  }

  saveTransaction(t) {
    // var _transaction = new Transaction('', t.value['Name'], )
    console.log(JSON.stringify(t.value));
    t.value['Type'] = this.FormName;
    console.log(t.value['Name']);
    console.log(t.value['Type']);
    console.log(t.value);

    this._transactionService.CreateTransaction(t.value).subscribe();
  }

  ShowExpenseForm() {
    this.FormName = 'Expense';
    this._showForm = true;
  }

  ShowIncomeForm() {
    this.FormName = 'Income';
    this._showForm = true;
  }
}
