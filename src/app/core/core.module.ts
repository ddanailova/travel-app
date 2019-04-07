import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NavigationComponent, NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent]
})
export class CoreModule { }
