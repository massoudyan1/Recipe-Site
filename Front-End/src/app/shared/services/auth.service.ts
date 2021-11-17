import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user.model';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public auth: AngularFireAuth, // Inject Firebase auth service
    public firestore: AngularFirestore, // Inject Firestore service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.removeItem('user');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }

  // Sign in with email/password
  async SignIn(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      await this.SetUserData(result.user);
      this.router.navigate(['profile-page']);
    } catch (error) {
      console.log(error);
    }
  }

  // Sign up with email/password
  async SignUp(email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      this.SendVerificationMail();
      this.SetUserData(result.user);
    } catch (error) {
      console.log(error);
    }
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.auth.currentUser
      .then((u) => u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  // Reset Forgot password
  async ForgotPassword(passwordResetEmail: string) {
    try {
      await this.auth.sendPasswordResetEmail(passwordResetEmail);
      console.log('Password reset email sent, check your inbox.');
    } catch (error) {
      console.log(error);
    }
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    return localStorage.getItem('user') ? true : false;
  }
  get getUserId(): string {
    return this.userData.uid;
  }
  get getUserDisplayName(): string {
    return this.userData.displayName;
  }
  get getUserPhotoURL(): string {
    return this.userData.photoURL;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider: firebase.auth.AuthProvider) {
    try {
      const result = await this.auth.signInWithPopup(provider);
      await this.SetUserData(result.user);
      this.router.navigate(['profile-page']);
    } catch (error) {
      console.log(error);
    }
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      firstName: '',
      lastName: '',
    };

    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  async SignOut() {
    await this.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  }
}
