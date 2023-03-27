import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudAlertComponent } from './components/crud-alert/crud-alert.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    CrudAlertComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports : [
    CrudAlertComponent
  ]
})
export class AlertModule { }
