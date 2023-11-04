import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SubscriptionComponent } from './subscription/subscription.component';


@NgModule({
  declarations: [
  
    HeaderComponent,
       SideBarComponent,
       AdminLayoutComponent,
       SubscriptionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
