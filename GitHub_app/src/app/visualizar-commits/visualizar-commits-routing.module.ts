import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizarCommitsPage } from './visualizar-commits.page';

const routes: Routes = [
  {
    path: ':id/:repo',
    component: VisualizarCommitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarCommitsPageRoutingModule {}
