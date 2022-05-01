import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Gender } from 'src/models/Gender/Gender.model';
import { AuthService } from 'src/services/auth/auth.service';
import { GenderService } from 'src/services/gender/gender.service';
import { SignupFormValidators } from './signup-form.validators';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.sass']
})
export class SignupFormComponent implements OnInit {

  @Output('onSignUpSucess') onSignUpSucess = new EventEmitter<any>();
  @Output('onSignUpFailed') onSignUpFailed = new EventEmitter<any>();

  form;
  formMessage = "";

  genders: Array<Gender> = [];

  constructor(private service: AuthService, private fb: FormBuilder, genderService: GenderService) {

    this.form = fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required]],
      name: ["",[Validators.required]],
      dob: ["",[Validators.required]],
      idGender: ["",[Validators.required]]
    });



    genderService.getAll()
    .subscribe(
      {
        next: (response: Array<Gender>)=>{
          this.genders = response;
        },
        error: ()=>{
         console.error("Error while getting the Genders from the server");
        }
      }
    );
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get name(){
    return this.form.get('name');
  }

  get dob(){
    return this.form.get('dob');
  }

  get idGender(){
    return this.form.get('idGender');
  }

  ngOnInit(): void {
  }

  submit(){
    this.service.signUp(this.form.value)
    .subscribe({
      next: (response)=>{
        console.log(response);
        this.onSignUpSucess.emit();
      },
      error: (err)=>{
        console.error(err.error);
        this.onSignUpFailed.emit();
      }
    });
  }
}
