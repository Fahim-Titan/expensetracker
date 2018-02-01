import { RegisterComponent } from './../pages/register.component';
// import { LoginComponent } from './../pages/login.component';
import { P500Component } from './../pages/500.component';
import { P404Component } from './../pages/404.component';
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
import { HttpClientModule } from '@angular/common/http';

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
    P404Component,
    P500Component,
    // LoginComponent,
    RegisterComponent
   ],
  providers: [
    AssetService,
    TransactionService,
    UserService,
    HttpClientModule
  ]
})
export class WidgetsModule { }
