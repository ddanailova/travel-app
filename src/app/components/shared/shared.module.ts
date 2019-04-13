import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { MostLikedSectionComponent } from './most-liked-section/most-liked-section.component';
import { FeaturedService } from 'src/app/core/services/featured.service';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    FooterComponent,
    MostLikedSectionComponent
  ],
  imports: [
CommonModule,
    RouterModule,
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
    MostLikedSectionComponent
  ],
  providers:[
    FeaturedService
  ]
})
export class SharedModule { }
