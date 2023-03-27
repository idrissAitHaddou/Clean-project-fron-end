import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Alert } from '../../classes/alert';

@Component({
  selector: 'app-crud-alert',
  templateUrl: './crud-alert.component.html',
  styleUrls: ['./crud-alert.component.css']
})
export class CrudAlertComponent implements OnInit {
  @Input() active: boolean = false
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  configSuccess: MatSnackBarConfig = {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 3000,
    panelClass: ['red-snackbar']  
  };
  constructor(private _snackBar?: MatSnackBar) { }

  ngOnChanges(): void {
      this.active = true;
      this.showAlert()
  }

  ngOnInit(): void {
        this.showAlert()
  }

  openSnackBar(): void {
    this._snackBar?.open('Cannonball!!', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['red-snackbar'] 
    });
  }

  showAlert(): void {
    if(this.active === true)  {
      const element = document.getElementById("show")
      element?.click()
    }
  }

}
