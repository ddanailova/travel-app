import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of as observableOf } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUser } from '../models';
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
        if (user) {
          return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges()
        } else {
          //Logged out
          return observableOf(null)
        }
      })
    );
  }

  async emailPasswordRegistration(email: string, password: string, displayName: string) {
    try {
      const { user } = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.setUserData(user, displayName);
      this.toastrService.success('Registration successful! You can login to your account.', 'Success');
      this.router.navigate(['/login']);
    } catch (error) {
      this.handleError(error)
    }
  }

  /// Email/Password Authentication ///
  async emailPasswordLogin(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      //Refactor this 
      this.user$.subscribe(data=>{
        if(data){
          this.saveUserInStorage(data)
        }
      });
      this.toastrService.success('Login successful!', 'Success');
      this.router.navigate(['/user/home']); 
    } catch (error) {
      this.handleError(error)
    }

  }


  
  //Set user data to firestore after succesful registration
  private setUserData(user, displayName: string) {
    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${user.uid}`);
    
    const data: IUser = {
      uid: user.uid,
      email: user.email,
      displayName,
      roles:['user'],
      trips:[]
    }
    return userRef.set(data);
  }
  
  async logOut() {
    try {
      await this.afAuth.auth.signOut();
      localStorage.clear()
      this.toastrService.success('Logout successful!', 'Success');
      this.router.navigate(['/home']);
    } catch (error) {
      this.handleError(error)
    }
  }
  
  saveUserInStorage(user:IUser){
    localStorage.setItem('displayName', user.displayName);
    if(user.roles.includes('admin')){
      localStorage.setItem('adminId', user.uid);
    }else{
      localStorage.setItem('uid', user.uid);
    }
  }
  
  isAdmin(){
    return !!localStorage.getItem('adminId');
  }
  
  //If error, console log and notify the user
  private handleError(error) {
    console.log(error);
    this.toastrService.error(error.message, 'Error');
  }
}
