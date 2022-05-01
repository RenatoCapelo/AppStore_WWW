import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperSignupFormComponent } from './components/developer-signup-form/developer-signup-form.component';
import { AppsComponent } from './pages/dev-dashboard/sub-pages/apps/apps.component';
import { DevDashboardComponent } from './pages/dev-dashboard/dev-dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AppsPublishedPageComponent } from './pages/dev-dashboard/sub-pages/apps/sub-pages/apps-published-page/apps-published-page.component';
import { NotDevPageComponent } from './pages/not-dev-page/not-dev-page.component';
import { AppsPublishNewPageComponent } from './pages/dev-dashboard/sub-pages/apps/sub-pages/apps-publish-new-page/apps-publish-new-page.component';

const routes: Routes = [
  {path: 'login',component: LoginPageComponent},
  {path: 'signup',component: SignupPageComponent},
  {path:'developerSignup',component:NotDevPageComponent},
  {path:'',component:HomePageComponent},
  {path:'developer',component: DevDashboardComponent,
  children:[
    {path:'apps', component:AppsComponent,children:[
      {path:'dashboard',component:AppsPublishedPageComponent},
      {path:'publish/:master',component:AppsPublishNewPageComponent},
      {path:'',redirectTo:'dashboard',pathMatch:'full'}
    ]},
    {path:'', redirectTo:"apps", pathMatch:"full"}
  ]},
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
