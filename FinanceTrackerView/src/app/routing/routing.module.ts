import { UserProfileComponent } from './../user-profile/user-profile.component';
import { UserAccessComponent } from './../user-access/user-access.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'user-access', component: UserAccessComponent},
  {path: 'user-profile', component: UserProfileComponent}
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
