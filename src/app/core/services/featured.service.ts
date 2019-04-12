import { Injectable } from '@angular/core';
import { IFeatured } from '../models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  constructor(
    private firesore:AngularFirestore,
    private router: Router,
    private toastrService: ToastrService
  ) { }
  
 async create(featuredData: IFeatured){
  try{
    await this.firesore.collection('featured').add(featuredData);
    this.toastrService.success(`New featured trip for ${featuredData.destination} created!`, 'Success');
      this.router.navigate(['/user/home']);
    }catch(error) {
      this.handleError(error)
    }
  }

  getAll(){
    return this.firesore.collection<IFeatured>('featured')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            } as IFeatured;
          }
        )}
      )
    )
  }
  //If error, console log and notify the user
  handleError(error) {
    console.log(error);
    this.toastrService.error(error.message, 'Error');
  }
}
