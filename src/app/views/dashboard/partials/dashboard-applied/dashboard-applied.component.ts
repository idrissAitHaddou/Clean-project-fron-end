import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateJobComponent } from 'src/app/features/job/components/create-job/create-job.component';

@Component({
  selector: 'app-dashboard-applied',
  templateUrl: './dashboard-applied.component.html',
  styleUrls: ['./dashboard-applied.component.css']
})
export class DashboardAppliedComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogCreate(): void {
    this.dialog.open(CreateJobComponent);
  }

}
