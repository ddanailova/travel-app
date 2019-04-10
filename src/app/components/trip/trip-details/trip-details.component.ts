import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ITrip } from 'src/app/core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  fromDetails:boolean;
  tripData:ITrip;
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    const tripData = this.route.snapshot.data.tripData;
    this.tripData=tripData;
  }

}
