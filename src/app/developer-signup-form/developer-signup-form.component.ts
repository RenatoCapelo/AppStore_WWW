import { Component, OnInit } from '@angular/core';
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
  response: UserToGet | null = null

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
        this.response = res;
        console.log(res)
        console.warn(`Previous Token: ${localStorage.getItem('token')}`);
        localStorage.setItem('token',this.response.token);
        console.warn(`Dev Token: ${localStorage.getItem('token')}`);
      },
      error:(error)=>{console.error(error)}
    })
  }

  ngOnInit(): void {
  }

}
