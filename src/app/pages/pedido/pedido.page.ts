import { Component, OnInit } from '@angular/core';
// import { productos } from '../../servicio';
import { Producto } from '../../model/producto';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
 nomEmpresae: string;
 RFC: string;
 Direccion: string;
 Cliente: string;
 domiDeCliente: string;
 numRem: string;
 fechaSalida: string;
 numprod = 0;

 Cantidad: number;
 Unidad: number;
 DescFormula: string;
 PreUnitario: number;

 descprod: Producto[];


  constructor() { }


  ngOnInit() {
  }

  enviar()
  {
    console.log('hola');
  }

  numeroPedidos() {
   this.numprod = + 1;
  }

  guradarProd()
  {
    this.descprod.push({
      cantidad: this.Cantidad,
      unidad: this.Unidad,
      descForm: this.DescFormula,
      precioUnitario: this.PreUnitario
    });
  }

}
