import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-white',
  templateUrl: './button-white.component.html',
  styleUrls: ['./button-white.component.css']
})
export class ButtonWhiteComponent implements OnInit {
  @Input() text = ""
  @Input() width = 0
  constructor() { }

  ngOnInit(): void {
  }

}
