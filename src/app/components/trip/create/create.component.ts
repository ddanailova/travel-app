import { Component, OnInit } from '@angular/core';
import { TripService } from './../../../core/services/trip.service';
import { ITrip } from 'src/app/core/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  fromTrip:boolean;
  fromCreate:boolean;
  formData:ITrip;
  isVerified:boolean;

  constructor(
    private tripService:TripService,
    private toastrService: ToastrService
    ) { 
    // this.formData=this.tripService.formData;
    this.isVerified=false;
  }

  ngOnInit() {
  }

  formDataHandler(event){
    this.formData=event;
  }

  submitFormHandler(event){
    if(!this.isVerified){
      this.toastrService.info("Don't forget to press Prieview to check and verify the last changes before you create your trip.", 'Tip');
      this.isVerified=true;
    }
  }
}
