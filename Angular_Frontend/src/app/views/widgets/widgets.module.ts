import { UserService } from './../../../services/user.service';
import { TransactionService } from './../../../services/transaction.service';
import { AssetService } from './../../../services/asset.service';
import { AssetComponent } from './../asset/asset.component';
import { TransactionComponent } from './../transaction/transaction.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    WidgetsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    Ng2SmartTableModule,
    CommonModule
  ],
  declarations: [
    WidgetsComponent,
    AssetComponent,
    TransactionComponent,
   ],
  providers: [
    AssetService,
    TransactionService,
    UserService
  ]
})
export class WidgetsModule { }
