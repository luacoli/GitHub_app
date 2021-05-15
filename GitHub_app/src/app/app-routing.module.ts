import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },*/
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'github',
    loadChildren: () => import('./github/github.module').then(m => m.GithubPageModule)
  },
  {
    path: 'explorar',
    loadChildren: () => import('./explorar/explorar.module').then(m => m.ExplorarPageModule)
  },
  {
    path: 'idealizadores',
    loadChildren: () => import('./idealizadores/idealizadores.module').then(m => m.IdealizadoresPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'criadores',
    loadChildren: () => import('./criadores/criadores.module').then( m => m.CriadoresPageModule)
  },
  {
    path: 'visualizar-commits',
    loadChildren: () => import('./visualizar-commits/visualizar-commits.module').then( m => m.VisualizarCommitsPageModule)
  },
  {
    path: 'visualizar-perfil',
    loadChildren: () => import('./visualizar-perfil/visualizar-perfil.module').then( m => m.VisualizarPerfilPageModule)
  },
  {
    path: 'visualizar-repositorios',
    loadChildren: () => import('./visualizar-repositorios/visualizar-repositorios.module').then( m => m.VisualizarRepositoriosPageModule)
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
