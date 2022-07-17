import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['./dev-dashboard.component.sass']
})
export class DevDashboardComponent implements OnInit {
  menuOpened:boolean = false
  routerOptions = [
    {link:"./apps", description:"Apps"}
  ]
  loggedInUser;
  constructor(private router:Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem("user")!).name
  }

  ngOnInit(): void {
  }

  signout(): void{
    localStorage.clear();
    this.router.navigate([""]);
  }

  menuButtonClick(){
    this.menuOpened = !this.menuOpened;
  }

}
