import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service'
import { IUser } from '../shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user$:Observable<IUser>;
  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$
   }

  ngOnInit() {
  }

}
