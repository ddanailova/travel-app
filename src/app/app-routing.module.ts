import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { UserLoginResolver } from './core/resolvers/user-login.resolver';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "user/home", component: HomeComponent, resolve:{user: UserLoginResolver} },
  { path:"login", component:LoginComponent},
  { path:"register", component:RegisterComponent},
  { path:"trip", loadChildren:"../app/components/trip/trip.module#TripModule"},
  { path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  AuthenticationModule
],
  exports: [RouterModule],
  providers:[
    UserLoginResolver,
  ]
})
export class AppRoutingModule { }
