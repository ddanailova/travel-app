import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service'
import { IUser } from '../shared/models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:IUser;
  isLoading: boolean;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
    ) {
    this.isLoading = false;
  }
  
 ngOnInit() {
    const url = this.route.snapshot.routeConfig.path;
    url.includes('user')?this.isLoading = true:this.isLoading=false;
    
    this.authService.user$.subscribe((data)=>{
      this.user=data;
      this.isLoading=false;
    },
    error=> console.log(error))
  }

}
