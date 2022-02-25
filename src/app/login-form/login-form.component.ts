import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserToGet } from 'src/models/User/userToGet.model';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  form;
  response: UserToGet | null = null

  passwordVisibility:boolean = false;

  constructor(private fb: FormBuilder, private service: AuthService,private _snackBar: MatSnackBar) {
    this.form = fb.group(
      {
        email: [null,[Validators.required,Validators.email]],
        password: [null,[Validators.required]]
      }
    );
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
    console.log(this.form.get('password'));
  }

  submit(){

    this.service.login(this.form.value)
    .subscribe({
      next: (response)=>{this.response = response;localStorage.setItem('token',response.token);console.log(localStorage.getItem('token'))},
      error: (error)=>{
        switch(error.status)
        {
          case HttpStatusCode.NotFound:
            this._snackBar.open("No user was found with the provided information",undefined,{
              duration: 1000,
              panelClass: ['blue-snackbar']
            })
            break;
          default:
            break;
        }
      }
    });

  }

  ngOnInit(): void {
  }

}
