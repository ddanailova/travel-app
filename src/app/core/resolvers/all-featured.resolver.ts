import  {  Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IFeatured } from '../models';
import { TripService } from '../services/trip.service';
import { first, delay } from 'rxjs/operators';
import { FeaturedService } from './../services/featured.service';

@Injectable({
    providedIn:'root'
})

export class AllFeaturedResolver implements Resolve<IFeatured>{
    constructor(private featuredService: FeaturedService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.featuredService.getAll().pipe(first())
    }
}