import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarRepositoriosPage } from './visualizar-repositorios.page';

const routes: Routes = [
  {
    path: ':id',
    component: VisualizarRepositoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarRepositoriosPageRoutingModule {}
