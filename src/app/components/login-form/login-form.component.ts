import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/models/User/user.model';
import { UserToGet } from 'src/models/User/userToGet.model';
import { AuthService } from 'src/services/auth/auth.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @Output('onLoginSucess') onLoginSucess = new EventEmitter<User>();
  @Output('onLoginFailed') onLoginFailed = new EventEmitter<any>();

  form;
  response: UserToGet | null = null;

  passwordVisibility:boolean = false;

  constructor(private fb: FormBuilder, private service: AuthService,private router: Router) {
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
  }

  submit(){
    this.service.login(this.form.value)
    .subscribe({
      next: (response)=>{
        this.response = response;
        localStorage.setItem('token',response.token);
        console.log(localStorage.getItem('token'));
        localStorage.setItem('user',JSON.stringify(response.user));
        console.log(JSON.parse(localStorage.getItem('user') as string) as User);
        this.onLoginSucess.emit(response.user);
      },
      error: (error)=>{
        this.onLoginFailed.emit(error);
      }
    });

  }

  ngOnInit(): void {
  }

}
