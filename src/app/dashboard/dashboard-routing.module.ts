import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {SubscriptionComponent} from "./subscription/subscription.component";

const routes: Routes = [
  {
    path:'subscription',component:AdminLayoutComponent,
    children: [
      { path:'' , component:SubscriptionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
