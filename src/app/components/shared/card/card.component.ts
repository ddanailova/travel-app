import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('fromDetails') fromDetails:boolean;
  @Input('fromCreate') fromCreate:boolean;
  @Input('fromList') fromList:boolean;
  constructor() { }

  ngOnInit() {
    
  }

}
