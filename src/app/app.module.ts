import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AuthService } from 'src/services/auth/auth.service';
import { GenderService } from 'src/services/gender/gender.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from './material.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DeveloperSignupFormComponent } from './developer-signup-form/developer-signup-form.component';
import { DeveloperService } from 'src/services/developer/developer.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    DeveloperSignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    GenderService,
    DeveloperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
