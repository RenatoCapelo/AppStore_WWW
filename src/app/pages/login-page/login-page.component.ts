import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/models/User/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  onLoginSuccess(user:User){
    console.log("pipoca crazy: ");
    console.log(user);
    if(user.developer)
      this.router.navigate(['/developer']);
    else
      this.router.navigate(['/developerSignup'])
  }
  onLoginFailed(error:any) {
    switch(error.status)
    {
      case HttpStatusCode.NotFound:
        this._snackBar.open("No user was found with the provided information",undefined,{
          duration: 1500,
          panelClass: ['red-snackbar']
        })
        break;
      default:
        break;
    }
  }
}
