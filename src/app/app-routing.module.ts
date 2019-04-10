import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { UserLoginResolver } from './core/resolvers/user-login.resolver';
import { AuthLoadGuard } from './core/guards/auth.load.guard';
import { AuthGuard } from './core/guards/auth.guarg';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "user/home" },
  { 
    path: "home", 
    component: HomeComponent,
  },
  { 
    path: "user/home", 
    component: HomeComponent, 
    resolve:{user: UserLoginResolver}, 
    canActivate:[AuthGuard] 
  },
  // { 
  //   path:"login", 
  //   component:LoginComponent,
  // },
  // { 
  //   path:"register", 
  //   component:RegisterComponent,
  // },
  { 
    path:"trip", 
    loadChildren:"../app/components/trip/trip.module#TripModule", 
    canLoad:[AuthLoadGuard]
  },
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
    AuthLoadGuard,
    AuthGuard,
  ]
})
export class AppRoutingModule { }
