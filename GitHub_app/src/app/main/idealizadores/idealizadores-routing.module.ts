import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdealizadoresPage } from './idealizadores.page';

const routes: Routes = [
  {
    path: '',
    component: IdealizadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdealizadoresPageRoutingModule {}
