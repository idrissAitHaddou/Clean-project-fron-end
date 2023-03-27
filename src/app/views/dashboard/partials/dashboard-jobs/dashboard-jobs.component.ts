import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateJobComponent } from 'src/app/features/job/components/create-job/create-job.component';

@Component({
  selector: 'app-dashboard-jobs',
  templateUrl: './dashboard-jobs.component.html',
  styleUrls: ['./dashboard-jobs.component.css']
})
export class DashboardJobsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogCreate(): void {
    this.dialog.open(CreateJobComponent);
  }

}
