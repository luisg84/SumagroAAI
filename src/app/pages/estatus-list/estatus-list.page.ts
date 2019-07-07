import { Component, OnInit } from '@angular/core';
import { SumagroAppService } from '../../servicios/sumagro-app.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, NavController } from '@ionic/angular';
import { Orden } from 'src/app/interfaces/reporte';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-estatus-list',
  templateUrl: './estatus-list.page.html',
  styleUrls: ['./estatus-list.page.scss'],
  providers: [AuthService, AngularFireAuth, SumagroAppService]
})
export class EstatusListPage implements OnInit {
  orden: Orden[];
  info:any;
  ingenioID;
  ordenID;

  // tslint:disable-next-line:max-line-length
  constructor(private sumagroAppService: SumagroAppService, public authService: AuthService, public alertController: AlertController, public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    let user = firebase.auth().currentUser.uid;
    this.getUser(user);
    console.log("El usuario es: "+JSON.stringify(user));
    this.solicitar();
    
  }

  async solicitar() {
    // tslint:disable-next-line:prefer-const
    let token = await this.authService.getToken();
    this.sumagroAppService.obtenerOrdenesStatus(token).subscribe( (resp: Orden[] ) => {

      this.orden = resp;
      console.log("Ordensilla: "+this.orden);
      //this.ordenIngenioID = 
     // console.log(`ordenes`, resp[2].enterpriseName);
    });
    }

    

    cancel() {
      this.router.navigate(['/menu']);
    }

    status(id: string) {
      this.router.navigate(['/estatus/' + id]);
    }

    async getUser(id) {
      // tslint:disable-next-line:prefer-const
      let token = await this.authService.getToken();
      this.info = await this.sumagroAppService.getInfo(token,id);
      console.log("infoo: "+ JSON.stringify(this.info));

      //console.log(this.info.ingenioId);
      this.ingenioID=this.info.ingenioId;
      
      
      return this.info

      }

}
