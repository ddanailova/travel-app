import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { 
    path: "register", 
    component:AuthenticationComponent,
    children:[
      { path:"", pathMatch:"full", component:RegisterComponent },
    ] 
  },
  { 
    path: "login", 
    component:AuthenticationComponent,
    children:[
      { path:"", pathMatch:"full", component:LoginComponent },
    ] 
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
