import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path: "login", component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:"header", component:HeaderComponent},
  {path:"signup",component:SignupComponent},
  {path:"profile",component:ProfileComponent, canActivate:[AuthGuard]},
  {path: "updateProfile", component:UpdateProfileComponent, canActivate:[AuthGuard]},
  {path: "products", component:ProductsComponent, canActivate:[AuthGuard]},
  {path: "productList", component:ProductListComponent, canActivate:[AuthGuard]},
  {path: "editProduct/:id", component:EditProductComponent, canActivate:[AuthGuard]},



 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
