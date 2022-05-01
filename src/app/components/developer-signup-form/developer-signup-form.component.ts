import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserToGet } from 'src/models/User/userToGet.model';
import { DeveloperService } from 'src/services/developer/developer.service';

@Component({
  selector: 'app-developer-signup-form',
  templateUrl: './developer-signup-form.component.html',
  styleUrls: ['./developer-signup-form.component.sass']
})
export class DeveloperSignupFormComponent implements OnInit {

  form

  @Output("onRegisterSuccess")  onRegisterSuccess = new EventEmitter<any>()
  @Output("onRegisterFailed") onRegisterFailed = new EventEmitter<any>()

  constructor(fb:FormBuilder,private devService: DeveloperService) {
    this.form = fb.group({
      devName: ["",[Validators.required]],
      phoneNum: ["",[Validators.required]],
      secEmail: []
    })
  }

  submit(){
    this.devService.postDev(this.form.value)
    .subscribe({
      next: (res)=>{
        let response = res;
        localStorage.setItem('token',response.token);
        this.onRegisterSuccess.emit();
      },
      error:(error)=>{this.onRegisterFailed.emit()}
    })
  }

  ngOnInit(): void {
  }

}
