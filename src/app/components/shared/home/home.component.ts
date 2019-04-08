import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:IUser;
  constructor(
    private route: ActivatedRoute,
    ) {
  }
  
 ngOnInit() {
    const url = this.route.snapshot.routeConfig.path;
    if(url.includes('user')){
      let userData = this.route.snapshot.data.user;
      this.user= userData;
    }
  }
}
