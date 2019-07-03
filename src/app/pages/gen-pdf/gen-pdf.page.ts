import { Component, OnInit } from '@angular/core';
import { SumagroAppService } from '../../servicios/sumagro-app.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Orden } from 'src/app/interfaces/reporte';
import { Router } from '@angular/router';




@Component({
  selector: 'app-gen-pdf',
  templateUrl: './gen-pdf.page.html',
  styleUrls: ['./gen-pdf.page.scss'],
  providers: [AuthService, AngularFireAuth, SumagroAppService]
})
export class GenPdfPage implements OnInit {
  orden: Orden[];



  // tslint:disable-next-line:max-line-length
  constructor(private sumagroAppService: SumagroAppService, public authService: AuthService, public alertController: AlertController, public router: Router) { }

  async ngOnInit() {
   this.solicitar();
  }

  async presentAlert(texto) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

}

  async solicitar() {
// tslint:disable-next-line:prefer-const
let token = await this.authService.getToken();
this.sumagroAppService.obtenerOrdenes(token).subscribe( (resp: Orden[] ) => {
  this.presentAlert(resp);
  this.orden = resp;
 // console.log(`ordenes`, resp[2].enterpriseName);
});
}

cancel() {
  this.router.navigate(['/menu']);
}

async generPDF(id) {

 // tslint:disable-next-line:prefer-const
let token = await this.authService.getToken();
this.sumagroAppService.obtenerPDF(token, id).subscribe( resp  => {
    console.log(resp);
  // this.orden = resp;
 // console.log(`ordenes`, resp[2].enterpriseName);
});
}

async deleteOrder(index, id) {
  if (index > -1) {
    this.orden.splice(index, 1); }

 // tslint:disable-next-line:prefer-const
// tslint:disable-next-line:align
// tslint:disable-next-line:prefer-const
// tslint:disable-next-line:align
  // tslint:disable-next-line:prefer-const
  let token = await this.authService.getToken();
  this.sumagroAppService.deleteOrder(token, id).subscribe( resp  => {
    // console.log(resp);
  // this.orden = resp;
 // console.log(`ordenes`, resp[2].enterpriseName);
});

}

}
