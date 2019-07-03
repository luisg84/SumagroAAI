import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'page', loadChildren: './pages/page/page.module#PagePageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'pedido', loadChildren: './pages/pedido/pedido.module#PedidoPageModule' },
  { path: 'gen-pdf', loadChildren: './pages/gen-pdf/gen-pdf.module#GenPdfPageModule' },
  { path: 'estatus/:id', loadChildren: './pages/estatus/estatus.module#EstatusPageModule' },
  { path: 'estatus-list', loadChildren: './pages/estatus-list/estatus-list.module#EstatusListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
