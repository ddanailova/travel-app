import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFeatured } from './../../../../core/models/featured';
import { ITrip } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('fromDetails') fromDetails:boolean;
  @Input('isPreview') isPreview:boolean;
  @Input('fromList') fromList:boolean;
  
  @Input('formData') formData:IFeatured;
  @Input('tripData') tripData:any;
  @Output('clickButtonEmitter') clickButtonEmitter = new EventEmitter<any>();
  isAdmin: boolean;

  constructor(private authService: AuthService) { 
    this.isAdmin=this.authService.isAdmin;
  }

  ngOnInit() {
    
  }

  clickHandler(event){
    const btnText = event.target.innerText;
      this.clickButtonEmitter.emit(btnText);
  }

}
