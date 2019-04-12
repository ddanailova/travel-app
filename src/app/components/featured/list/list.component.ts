import { Component, OnInit } from '@angular/core';
import { IFeatured } from './../../../core/models/featured';
import { FeaturedService } from './../../../core/services/featured.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  fromList: boolean;
  list:IFeatured[];
  constructor(
    private tripService:FeaturedService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const featuredList = this.route.snapshot.data.featuredList;
    this.list=featuredList;
  }
}
