import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:"header", component:HeaderComponent},
  {path:"signup",component:SignupComponent},
  {path:"profile",component:ProfileComponent},

 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
