import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJobComponent } from './components/card-job/card-job.component';
import { ListJobComponent } from './components/list-job/list-job.component';
import { DetailsJobComponent } from './components/details-job/details-job.component';
import { JobRoutingModule } from './job-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ApplyJobComponent } from './components/apply-job/apply-job.component';
import { SmallCardJobComponent } from './components/small-card-job/small-card-job.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DeleteJobComponent } from './components/delete-job/delete-job.component';
import { CancelJobComponent } from './components/cancel-job/cancel-job.component';
import { UpdateJobComponent } from './components/update-job/update-job.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { ListAppliesJobComponent } from './components/list-applies-job/list-applies-job.component';


@NgModule({
  declarations: [
    CardJobComponent,
    ListJobComponent,
    DetailsJobComponent,
    ApplyJobComponent,
    SmallCardJobComponent,
    DeleteJobComponent,
    CancelJobComponent,
    UpdateJobComponent,
    CreateJobComponent,
    ListAppliesJobComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule,
    MatDialogModule,
    SharedModule,
    MatTooltipModule
  ],
  exports: [
    ListJobComponent,
    DetailsJobComponent,
    SmallCardJobComponent,
    ListAppliesJobComponent
  ]
})
export class JobModule { }
