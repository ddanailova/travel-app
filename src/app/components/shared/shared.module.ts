import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
    CardComponent
  ]
})
export class SharedModule { }
