import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFeatured } from './../../../core/models/featured';
import { FeaturedService } from './../../../core/services/featured.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  fromDetails:boolean;
  id: string;
  featuredData:IFeatured;
  constructor(
    private route: ActivatedRoute,
    private featuredService: FeaturedService,
    private router: Router) { 
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.id=id;
    const featuredData = this.route.snapshot.data.featuredData;
    this.featuredData=featuredData;
  }

  buttonClickHandler(event){
    const newLikes = this.featuredData.likes + 1;
    if(event==='favorite'){
      this.featuredService.edit(this.id, {likes:newLikes})
    }
    // this.router.navigate(['/featured/details', this.id]);
  }

}
