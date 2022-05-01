import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  onSignUpSuccess(){
    this.router.navigate(["/login"]);
  }

  onSignUpFailed(){
    this._snackBar.open("There was an error while creating the user",undefined,{
      duration: 1000,
      panelClass: ['red-snackbar']
    });
  }

}
