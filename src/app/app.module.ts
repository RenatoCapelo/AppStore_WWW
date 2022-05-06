import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AuthService } from 'src/services/auth/auth.service';
import { GenderService } from 'src/services/gender/gender.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { DeveloperSignupFormComponent } from './components/developer-signup-form/developer-signup-form.component';
import { DeveloperService } from 'src/services/developer/developer.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NotDevPageComponent } from './pages/not-dev-page/not-dev-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgParticlesModule } from 'ng-particles';
import { DevDashboardComponent } from './pages/dev-dashboard/dev-dashboard.component';
import { AppsComponent } from './pages/dev-dashboard/sub-pages/apps/apps.component';
import { AppsTableComponent } from './pages/dev-dashboard/sub-pages/apps/components/apps-table/apps-table.component';
import { AppsPublishedPageComponent } from './pages/dev-dashboard/sub-pages/apps/sub-pages/apps-published-page/apps-published-page.component';
import { EditAppDialogComponent } from './pages/dev-dashboard/sub-pages/apps/components/edit-app-dialog/edit-app-dialog.component';
import { DeleteAppDialogComponent } from './pages/dev-dashboard/sub-pages/apps/components/delete-app-dialog/delete-app-dialog.component';
import { AppsService } from 'src/services/apps/apps.service';
import { AppsPublishNewPageComponent } from './pages/dev-dashboard/sub-pages/apps/sub-pages/apps-publish-new-page/apps-publish-new-page.component';
import { AppCategoriesService } from 'src/services/appCategories/app-categories.service';
import { UrlsService } from 'src/services/urls/urls.service';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    DeveloperSignupFormComponent,
    NotFoundComponent,
    LoginFormComponent,
    LoginPageComponent,
    SignupPageComponent,
    NotDevPageComponent,
    HomePageComponent,
    DevDashboardComponent,
    AppsComponent,
    AppsTableComponent,
    AppsPublishedPageComponent,
    EditAppDialogComponent,
    DeleteAppDialogComponent,
    AppsPublishNewPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FontAwesomeModule,
    NgParticlesModule,
    NgxPaginationModule
  ],
  providers: [
    AuthService,
    GenderService,
    DeveloperService,
    AppsService,
    AppCategoriesService,
    UrlsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
