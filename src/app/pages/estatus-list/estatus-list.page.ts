import { Component, OnInit } from '@angular/core';
import { SumagroAppService } from '../../servicios/sumagro-app.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, NavController } from '@ionic/angular';
import { Orden } from 'src/app/interfaces/reporte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estatus-list',
  templateUrl: './estatus-list.page.html',
  styleUrls: ['./estatus-list.page.scss'],
  providers: [AuthService, AngularFireAuth, SumagroAppService]
})
export class EstatusListPage implements OnInit {
  orden: Orden[];

  // tslint:disable-next-line:max-line-length
  constructor(private sumagroAppService: SumagroAppService, public authService: AuthService, public alertController: AlertController, public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.solicitar();
  }

  async solicitar() {
    // tslint:disable-next-line:prefer-const
    let token = await this.authService.getToken();
    this.sumagroAppService.obtenerOrdenesStatus(token).subscribe( (resp: Orden[] ) => {

      this.orden = resp;
     // console.log(`ordenes`, resp[2].enterpriseName);
    });
    }

    cancel() {
      this.router.navigate(['/menu']);
    }

    status(id: string) {
      this.router.navigate(['/estatus/' + id]);
    }

}
