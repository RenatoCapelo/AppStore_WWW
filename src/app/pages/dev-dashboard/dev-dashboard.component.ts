import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  menuButtonClick(){
    this.menuOpened = !this.menuOpened;
  }

}
