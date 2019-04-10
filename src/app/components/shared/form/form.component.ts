import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input('fromTrip') fromTrip:boolean;
  @Input('fromFeatured') fromFeatured:boolean;
  @Output('formDataEmitter') formDataEmitter = new EventEmitter<any>();
  
  form: FormGroup; 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      destination:['',Validators.required],
      startDate: ['',Validators.required],
      endDate: ['',Validators.required],
      private:[false],
      places:[''],
      image:[''],
    });

  }
  
  get f (){
    return this.form.controls;
  }
  submitHandler(){
    this.formDataEmitter.emit({ 
      destination:this.f.destination.value.trim(),
      startDate: this.f.startDate.value,
      endDate: this.f.endDate.value,
      private:this.f.private.value,
      places:this.f.places.value.split(/\s*,\s*/),
      image:this.f.image.value.trim(),
    })

  }
}
