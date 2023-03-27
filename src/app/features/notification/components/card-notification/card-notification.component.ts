import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-notification',
  templateUrl: './card-notification.component.html',
  styleUrls: ['./card-notification.component.css']
})
export class CardNotificationComponent implements OnInit {
  @Input() title: string = ""
  @Input() body: string = ""
  @Input() icon: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
