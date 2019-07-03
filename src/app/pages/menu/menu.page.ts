import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public router: Router, private statusBar: StatusBar ) { }

  ngOnInit() {
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
