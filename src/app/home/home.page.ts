import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {  SumagroAppService } from '../servicios/sumagro-app.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [AuthService, AngularFireAuth, SumagroAppService, FCM]
})
export class HomePage {

  email: string;
  password: string;

  // tslint:disable-next-line:max-line-length
  constructor(public alertController: AlertController,public loadingController: LoadingController, private authService: AuthService, public router: Router, public sumagroAppService: SumagroAppService, public fcm: FCM) { 
    
  }

  obtenerTokenFCM() {
    this.fcm.getToken().then(
      (token: string) => {
        console.log('Este es el token: ' + token);
        this.mandarToken(token);
      }
    ).catch(error => {
      console.log('Error');
    });

    this.fcm.onTokenRefresh().subscribe((token: string) => {
      console.log('Este es el token Actualizado: ' + token);
    });

    this.fcm.onNotification().subscribe(data => {
      if ( data.wasTapped) {
    // Ocurre en segundo plano
    console.log('Estamos en segundo plano ');
      } else {
        // Ocurre en primer plano
        console.log('Estamos en primer plano ');
      }
    }, error => {
    console.log('El error es: ' + error );
    });

  }


  onSubmitTemplate() {
    console.log('Holu');
  }

  async Login() {

    await this.loadingController.create({
      message: 'Login...'}).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {
          console.log('Loading Dismissed!');
        });

      });
    console.log(this.email );
    console.log(this.password);
    console.log('Loading dismissed!');
    let response = '';
    try {
      response = await this.authService.doLogin({email: this.email, password: this.password});
      let token = await this.authService.getToken();
      let userData:any = await this.sumagroAppService.getInfo(token,response['user']['uid']);
      console.log(userData)
      if(userData.rol=="WAREHOUSE"){
      this.obtenerTokenFCM();

      this.router.navigate(['/menu']);
      }else{
        
          const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: "Acceso denegado",
            message: "El usuario no tiene permisos para usar esta app.",
            buttons: ['OK']
          });
      
          await alert.present();
      }

    } catch (err) {
      console.log(err);
      this.presentAlert({code: err.code, message: err.message});
      console.log('Error al hacer login!!!!');
    }
    console.log('Reponse: ' + JSON.stringify(response));
    this.closeLoader();

  }
  closeLoader() {
    this.loadingController.dismiss();
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: message.code,
      message: message.message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async mandarToken(token2) {
    // tslint:disable-next-line:prefer-const
    let token = await this.authService.getToken();
    // tslint:disable-next-line:typedef-whitespace
    this.sumagroAppService.mandarToken(token, token2 ).subscribe( (resp) => {

     console.log(resp);
     // console.log(`ordenes`, resp[2].enterpriseName);
    });
    }

  // async onSubmitLogin() {
  //     // console.log(this.email);
  //     // console.log(this.password);
  //     await this.authService.doLogin({email: this.email, password: this.password}).then( res => {
  //     this.router.navigate(['/menu']);
  //   }).catch(err => alert('los datos son incorrectos o no existe el usuario'));
  // }


}


