import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-dev-page',
  templateUrl: './not-dev-page.component.html',
  styleUrls: ['./not-dev-page.component.sass']
})
export class NotDevPageComponent implements OnInit {

  constructor(private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onRegisterSuccess(){
    this.router.navigate(['/developer']);
  }

  onRegisterFailed(){
    this.snackBar.open("There was an error, try again later",undefined,{
      duration: 1500,
      panelClass: ['red-snackbar']
    })
  }

}
