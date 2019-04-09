import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    CardComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
    CardComponent,
    FormComponent
  ]
})
export class SharedModule { }
