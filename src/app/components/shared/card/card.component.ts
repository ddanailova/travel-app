import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2} from '@angular/core';
import { ITrip } from 'src/app/core/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('fromDetails') fromDetails:boolean;
  @Input('isPreview') isPreview:boolean;
  @Input('fromList') fromList:boolean;
  @Input('formData') formData:ITrip;
  @Input('tripData') tripData:ITrip;
  @Output('clickButtonEmitter') clickButtonEmitter = new EventEmitter<any>();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  clickHandler(event){
    const btnText = event.target.innerText;
      this.clickButtonEmitter.emit(btnText);
  }
}
