import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  private _showForm = false;
  private FormName= '';
  constructor() { }

  ngOnInit() {
  }

  saveTransaction(t) {
    // var _transaction = new Transaction('', t.value['Name'], )
    console.log(JSON.stringify(t.value) + this.FormName);
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
