import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of as observableOf} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUser } from '../shared/models';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<IUser>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if(user){
          return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges()
        }else {
          //Logged out
          return observableOf(null)
        }
      })
    )
  }

  async emailPasswordRegistration(email: string, password: string, displayName: string){   
    try{
      const {user} = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.setUserData(user, displayName);
      this.router.navigate(['/user/login']);
    }catch(error){
      this.handleError(error)
    }
}

  /// Email/Password Authentication ///
  async emailPasswordLogin(email: string, password: string){   
      try{
        await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/']);
      }catch(error){
        this.handleError(error)
      }
      
  }


  //If error, console log and notify the user
  private handleError(error){
    console.log(error);
    this.toastrService.error(error.message, 'Error');
  }

  //Set user data to firestore after succesful registration
  private setUserData(user, displayName: string){
    const userRef: AngularFirestoreDocument<IUser>=this.afs.doc(`users/${user.uid}`);

    const data: IUser = {
      uid: user.uid,
      email: user.email,
      displayName
    }
    return userRef.set(data);
  }

  async logOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
