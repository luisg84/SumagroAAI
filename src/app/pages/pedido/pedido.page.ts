import { Component, OnInit } from '@angular/core';
// import { productos } from '../../servicio';
import { Producto } from '../../model/producto';
import { Pedido } from '../../interfaces/pedido';
import { AuthService } from 'src/app/servicios/auth.service';
import { SumagroAppService } from '../../servicios/sumagro-app.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Ingenio } from '../../interfaces/reporte';



@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  providers: [AuthService, AngularFireAuth, SumagroAppService]
})
export class PedidoPage implements OnInit {
 nomEmpresae = '';
 RFC: string;
 Direccion: string;
 Cliente: string;
 domiDeCliente: string;
 numRem: number;
 fechaSalida: string;
 numprod = 0;
 Totgen: number;
 anticipo: number;
 stateForm = false;
 id: string;
 valor = '';
 // status: string;

 Cantidad: number;
 Unidad: string;
 DescFormula: string;
 PreUnitario: number;
 TotInd: number;



 ingenio: Ingenio[];
 objetoGeneral: Pedido;

 // tslint:disable-next-line:new-parens
 descprod: Producto[] = new Array;


  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, public authService: AuthService, public sumagroAppService: SumagroAppService, public loadingController: LoadingController ) { }


  async ngOnInit() {
    this.solicitarIngenios();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Agregando pedido',
       duration: 6000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.router.navigate(['/menu']);
    console.log('Loading dismissed!');
  }


  enviar() {
    console.log('hola');
  }

  numeroPedidos() {
   this.numprod = + 1;
  }

  guradarProd() {
    const prodcutoSolicitado: Producto = {
        description: this.DescFormula,
        quantity: this.Cantidad,
        total: this.TotInd,
        unit: this.Unidad,
        unitPrice : this.PreUnitario
    };

     // tslint:disable-next-line:align
    //  await this.loadingController.create({
    //   message: 'Login...'}).then((res) => {
    //     res.present();
    //     res.onDidDismiss().then((dis) => {
    //       console.log('Loading Dismissed!');
    //     });
    // this.descprod.push(prodcutoSolicitado);
    // this.Cantidad = 0;
    // this.Unidad = ' ';
    // this.DescFormula = ' ';
    // this.PreUnitario = 0;
    // this.TotInd = 0;
    this.descprod.push(prodcutoSolicitado);
    console.log(this.Cantidad);
  }


 async  enviarInfo() {

    this.presentLoading();


    this.objetoGeneral.subOrders = this.descprod;
    // tslint:disable-next-line:prefer-const
    let token = await this.authService.getToken();
    // tslint:disable-next-line:prefer-for-of
    // for (let index = 0; index < this.descprod.length; index++) {
    //   console.log(this.descprod[index]);
    // }
    console.log(this.objetoGeneral);
    this.sumagroAppService.agregarOrden(token, this.objetoGeneral).subscribe(data => {
      console.log(data);
    });
  }

  guradarInfoGen() {


     // tslint:disable-next-line:align
     this.objetoGeneral  = {
      // enterpriseName: this.nomEmpresae,
      // RFC: this.RFC,
      // address: this.Direccion,
      advance: this.anticipo,
      client: this.Cliente,
      clientAddress: this.Direccion,
      ingenioId: this.id,
      remissionNumber: this.numRem,
      shippingDate: this.fechaSalida,
      subOrders: [],
      totalGeneral: this.Totgen
    };
        // tslint:disable-next-line:align
        this.stateForm = true;
  }

  cancel() {
    this.router.navigate(['/menu']);
  }

  async solicitarIngenios() {
    // tslint:disable-next-line:prefer-const
    let token = await this.authService.getToken();
    this.sumagroAppService.obtenerInegenios(token).subscribe( (resp: Ingenio[] ) => {
      // this.presentAlert(resp);
      this.ingenio = resp;
      console.log(this.ingenio);
     // console.log(`ordenes`, resp[2].enterpriseName);
    });
    }

    print() {

    console.log(this.valor);
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < this.ingenio.length; i++ ) {
          // tslint:disable-next-line:triple-equals
          if ( this.ingenio[i].id == this.valor) {
            console.log(this.ingenio[i].name);
            this.Cliente = this.ingenio[i].name;
            this.Direccion = this.ingenio[i].address;
            this.id = this.ingenio[i].id;
          }
    }
    }



}
// {{ordenes.id}}
