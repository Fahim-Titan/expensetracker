import { DashboardComponent } from './../dashboard/dashboard.component';
import { UserProfileComponent } from './../dashboard/user-profile/user-profile.component';
import { UserAccessComponent } from './../dashboard/user-access/user-access.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'user-access', component: UserAccessComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'dashboard', component: DashboardComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    // UserAccessComponent
  ]
})

export class RoutingModule { }
