import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { BadgesComponent } from './badges/badges.component';
import { UpdateBadgeComponent } from './update-badge/update-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardAdminComponent,
    BadgesComponent,
    UpdateBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
