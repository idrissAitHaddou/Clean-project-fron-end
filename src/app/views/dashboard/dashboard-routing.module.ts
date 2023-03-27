import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAppliedComponent } from './partials/dashboard-applied/dashboard-applied.component';
import { DashboardHomeComponent } from './partials/dashboard-home/dashboard-home.component';
import { DashboardJobsComponent } from './partials/dashboard-jobs/dashboard-jobs.component';
import { DashboardMessagesComponent } from './partials/dashboard-messages/dashboard-messages.component';
import { DashboardProfileComponent } from './partials/dashboard-profile/dashboard-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'profile',
    component: DashboardProfileComponent
  },
  {
    path: 'jobs',
    component: DashboardJobsComponent
  },
  {
    path: 'messages',
    component: DashboardMessagesComponent
  },
  {
    path: 'applied',
    component: DashboardAppliedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
