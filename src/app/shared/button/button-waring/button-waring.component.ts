import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-waring',
  templateUrl: './button-waring.component.html',
  styleUrls: ['./button-waring.component.css']
})
export class ButtonWaringComponent implements OnInit {
  @Input() text = ""
  @Input() width = 0
  constructor() { }

  ngOnInit(): void {
  }

}
