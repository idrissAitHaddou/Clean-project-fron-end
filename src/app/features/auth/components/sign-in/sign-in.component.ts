import { Component, ViewChild, OnInit } from '@angular/core';
import { CrudAlertComponent } from 'src/app/features/alert/components/crud-alert/crud-alert.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  activeAlert: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  login(): void {
    this.activeAlert = true;
  }

}
