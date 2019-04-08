import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
      // { path: "", pathMatch: "full", redirectTo: "/register" },
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
    ]

    export const AuthenticationRouterModule = RouterModule.forChild(routes)
    