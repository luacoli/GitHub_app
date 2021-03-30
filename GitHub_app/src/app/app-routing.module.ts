import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
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
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
