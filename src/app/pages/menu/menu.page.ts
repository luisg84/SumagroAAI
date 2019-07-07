import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import { AuthService } from '../../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {  SumagroAppService } from '../../servicios/sumagro-app.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  providers: [AuthService, AngularFireAuth, SumagroAppService]
})
export class MenuPage implements OnInit {
  // tslint:disable-next-line:no-var-keyword
  // tslint:disable-next-line:align
 

  constructor(public router: Router, private statusBar: StatusBar, public authService: AuthService) { }


  

 async  ngOnInit() {
    // let user = firebase.auth().currentUser;
    // console.log("El usuario es: "+JSON.stringify(user.uid));
    this.statusBar.backgroundColorByHexString('#23c28f');
    
  }
  // 23c28f
  // 178f69

  irPedido() {
    this.router.navigate(['/pedido']);
  }

  irGenPdf() {
    this.router.navigate(['/gen-pdf']);
  }

  irStatus() {
    this.router.navigate(['/estatus-list']);
  }

  

}
