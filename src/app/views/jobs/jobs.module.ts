import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobModule } from 'src/app/features/job/job.module';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    JobModule,
    RouterModule,
    MatMenuModule
  ]
})
export class JobsModule { }
