import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentRouter: string = "/dashboard"
  iconItems: any[] = [
    {title : "Home", icon : "home", active : false, router : "/dashboard"},
    {title : "Profile", icon : "profile", active : false, router : "/dashboard/profile"},
    {title : "Jobs", icon : "jobs", active : false, router : "/dashboard/jobs"},
    {title : "Applied", icon : "applied", active : false, router : "/dashboard/applied"},
    {title : "Messages", icon : "messages", active : false, router : "/dashboard/messages"},
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getCurrentRouter()
  }
  
  getCurrentRouter(): void {
    this.currentRouter = this.router.url;
    this.filtterRouter()
  }

  filtterRouter(): void {
    this.iconItems.forEach(item => {
      if(item.router === this.currentRouter) {
        item.active = true;
      }
    })
  }

  changeCurrentRouter(routerName: string): void {
    this.currentRouter = routerName;
  }

}
