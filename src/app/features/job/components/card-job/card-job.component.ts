import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplyJobComponent } from '../apply-job/apply-job.component';
import { DetailsJobComponent } from '../details-job/details-job.component';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css']
})
export class CardJobComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogDetails(): void {
    this.dialog.open(DetailsJobComponent);
  }

  openDialogApply(): void {
    this.dialog.open(ApplyJobComponent);
  }

}
