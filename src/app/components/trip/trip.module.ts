import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripRoutingModule } from './trip-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TripService } from 'src/app/core/services/trip.service';

@NgModule({
  declarations: [CreateComponent, EditComponent, TripDetailsComponent, TripListComponent],
  imports: [
    CommonModule,
    TripRoutingModule,
    SharedModule
  ],
  exports:[
    
  ],
  providers:[
    TripService,
  ]
})
export class TripModule { }
