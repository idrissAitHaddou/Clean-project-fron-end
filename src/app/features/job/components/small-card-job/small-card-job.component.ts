import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelJobComponent } from '../cancel-job/cancel-job.component';
import { DeleteJobComponent } from '../delete-job/delete-job.component';
import { DetailsJobComponent } from '../details-job/details-job.component';
import { UpdateJobComponent } from '../update-job/update-job.component';

@Component({
  selector: 'app-small-card-job',
  templateUrl: './small-card-job.component.html',
  styleUrls: ['./small-card-job.component.css']
})
export class SmallCardJobComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogDetails(): void {
    this.dialog.open(DetailsJobComponent);
  }

  openDialogDelete(): void {
    this.dialog.open(DeleteJobComponent);
  }

  openDialogCancel(): void {
    this.dialog.open(CancelJobComponent);
  }

  openDialogEdit(): void {
    this.dialog.open(UpdateJobComponent);
  }

}
