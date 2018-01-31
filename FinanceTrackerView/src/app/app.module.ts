import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { UserAccessComponent } from './dashboard/user-access/user-access.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';

// Services
import { UserService } from '../Service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Component/footer/footer.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserAccessComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
