import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesOrdenPage } from './detalles-orden.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesOrdenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesOrdenPage]
})
export class DetallesOrdenPageModule {}
