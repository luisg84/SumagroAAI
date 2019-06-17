import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from 'angularfire2';
import {  } from '@angular/fire/';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }

   login(email: string, password: string) {
     // tslint:disable-next-line:no-shadowed-variable
     return new Promise((resolve, reject ) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(res => {resolve(res);
      }).catch(err => reject('Error: ' + err));
     });
 
  }


}
