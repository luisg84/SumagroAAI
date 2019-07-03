import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from 'angularfire2';
import {  } from '@angular/fire/';
import { reject } from 'q';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../servicios/firebase.service';

@Injectable()
export class AuthService {

  constructor(private firebaseService: FirebaseService, public afAuth: AngularFireAuth) {
  }

  doLogin(value) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err));
    });
   }

   getToken() {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise<any>((resolve, reject) => {
      // tslint:disable-next-line:only-arrow-functions
      firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
        console.log('idToken: ', idToken);
        resolve(idToken);
      // tslint:disable-next-line:only-arrow-functions
      }).catch(function(err) {

        console.log('error:', err);
        reject(err);
      });
    });
   }
}
