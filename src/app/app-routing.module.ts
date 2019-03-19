import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {UserdashboardComponent} from './userdashboard/userdashboard.component';
import {SearchComponent} from './search/search.component';
import {UploadDownloadComponent} from './upload/upload.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'search', component: SearchComponent},
  // {path: 'registration', component: RegistrationComponent},
  {path: 'userdashboard', component: UserdashboardComponent},
  {path: 'upload', component: UploadDownloadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
