import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNotificationComponent } from './components/list-notification/list-notification.component';
import { CardNotificationComponent } from './components/card-notification/card-notification.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListNotificationComponent,
    CardNotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListNotificationComponent,
    CardNotificationComponent
  ]
})
export class NotificationModule { }
