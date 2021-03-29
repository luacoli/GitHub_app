import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
    {
      path: 'github',
      loadChildren: () => import('../github/github.module').then( m => m.GithubPageModule)
    },
    {
      path: 'explorar',
      loadChildren: () => import('../explorar/explorar.module').then( m => m.ExplorarPageModule)
  },
 {
     path: 'idealizadores',
      loadChildren: () => import('../idealizadores/idealizadores.module').then( m => m.IdealizadoresPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  }


    ]
  },




];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
