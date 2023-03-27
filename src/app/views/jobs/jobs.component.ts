import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  toogleElement(id: string): void {
      const element = document.getElementById(id)
      element?.classList.toggle("hidden")
  }

}
