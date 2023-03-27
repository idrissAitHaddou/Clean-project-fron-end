import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-title-vertical',
  templateUrl: './icon-title-vertical.component.html',
  styleUrls: ['./icon-title-vertical.component.css']
})
export class IconTitleVerticalComponent implements OnInit {
  @Input() title: string = ""
  @Input() icon: string = ""
  @Input() active: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
