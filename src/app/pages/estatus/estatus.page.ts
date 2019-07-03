import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { SumagroAppService } from 'src/app/servicios/sumagro-app.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Status } from '../../interfaces/reporte';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.page.html',
  styleUrls: ['./estatus.page.scss'],
  providers: [AuthService, AngularFireAuth, SumagroAppService]
})
export class EstatusPage implements OnInit {
  status: string ;
  idIngenioP: string;
  // tslint:disable-next-line:max-line-length
  constructor(private sumagroAppService: SumagroAppService, public authService: AuthService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.idIngenioP = this.route.snapshot.paramMap.get('id');
    this.statusOrder(this.route.snapshot.paramMap.get('id'));
  }

  async statusOrder(idi) {
    // tslint:disable-next-line:prefer-const
    let token = await this.authService.getToken();
    // tslint:disable-next-line:typedef-whitespace
    this.sumagroAppService.statusOrder(token, idi ).subscribe( (resp: Status ) => {
     this.status = resp.status;
     console.log(this.status);
     // console.log(`ordenes`, resp[2].enterpriseName);
    });
    }

    back() {
      this.router.navigate(['/estatus-list']);
    }

}