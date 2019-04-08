import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseHandlerInterceptor } from './interceptors/response-handler.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  imports: [
  CommonModule,
  ],
  providers:[

  ]
})
export class CoreModule { }
