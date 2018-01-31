import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetsComponent } from './widgets.component';
import { AssetComponent } from 'app/views/asset/asset.component';
import { TransactionComponent } from 'app/views/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
    data: {
      title: 'Widgets'
    }
  },
  {
    path: 'asset',
    component: AssetComponent,
    data: {
      title: 'Assets'
    }
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    data: {
      title: 'Transaction'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {}
