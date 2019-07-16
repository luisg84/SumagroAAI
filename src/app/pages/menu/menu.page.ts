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
 

  constructor(public router: Router, private statusBar: StatusBar, public authService: AuthService) { }


  

 async  ngOnInit() {
   
    this.statusBar.backgroundColorByHexString('#23c28f');
    
  }
 

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
