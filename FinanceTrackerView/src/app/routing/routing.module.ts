import { UserAccessComponent } from './../user-access/user-access.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'user-access', component: UserAccessComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    UserAccessComponent
  ]
})

export class RoutingModule { }
