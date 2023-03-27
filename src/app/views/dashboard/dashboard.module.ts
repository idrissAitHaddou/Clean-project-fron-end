import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ViewsCharedModule } from '../views-chared/views-chared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardHomeComponent } from './partials/dashboard-home/dashboard-home.component';
import { DashboardProfileComponent } from './partials/dashboard-profile/dashboard-profile.component';
import { DashboardMessagesComponent } from './partials/dashboard-messages/dashboard-messages.component';
import { DashboardAppliedComponent } from './partials/dashboard-applied/dashboard-applied.component';
import { DashboardJobsComponent } from './partials/dashboard-jobs/dashboard-jobs.component';
import { JobModule } from 'src/app/features/job/job.module';
import { MatMenuModule } from '@angular/material/menu';
import { UserModule } from 'src/app/features/user/user.module';
import { CompanyModule } from 'src/app/features/company/company.module';
import { ChatModule } from 'src/app/features/chat/chat.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardProfileComponent,
    DashboardMessagesComponent,
    DashboardAppliedComponent,
    DashboardJobsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ViewsCharedModule,
    JobModule,
    MatMenuModule,
    UserModule,
    CompanyModule,
    ChatModule
  ]
  
})
export class DashboardModule { }
