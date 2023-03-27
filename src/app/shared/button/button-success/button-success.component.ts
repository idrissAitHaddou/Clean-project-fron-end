import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-success',
  templateUrl: './button-success.component.html',
  styleUrls: ['./button-success.component.css']
})
export class ButtonSuccessComponent implements OnInit {
  @Input() text = ""
  @Input() width = 0
  constructor() { }

  ngOnInit(): void {
  }

}
