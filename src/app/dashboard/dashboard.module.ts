import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import { AddSubscriptionComponent } from './subscription/add-subscription/add-subscription.component';
import { EditSubscriptionComponent } from './subscription/edit-subscription/edit-subscription.component';
import { AllPisteComponent } from './piste/all-piste/all-piste.component';
import { AddPisteComponent } from './piste/add-piste/add-piste.component';


@NgModule({
  declarations: [

    HeaderComponent,
       SideBarComponent,
       AdminLayoutComponent,
       SubscriptionComponent,
       AddSubscriptionComponent,
       EditSubscriptionComponent,
       AllPisteComponent,
       AddPisteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ToastModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    ToolbarModule,
    FileUploadModule,
    RatingModule,
    TagModule,
    ConfirmDialogModule,
    InputNumberModule,
    RadioButtonModule,
    DialogModule,
    CalendarModule
  ]
})
export class DashboardModule { }
