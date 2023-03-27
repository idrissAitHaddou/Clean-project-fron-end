import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-danger',
  templateUrl: './button-danger.component.html',
  styleUrls: ['./button-danger.component.css']
})
export class ButtonDangerComponent implements OnInit {
  @Input() text = ""
  @Input() width = 0
  constructor() { }

  ngOnInit(): void {
  }

}
