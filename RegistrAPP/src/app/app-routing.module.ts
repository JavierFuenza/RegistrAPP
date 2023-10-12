import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./registro/login/login.module').then( m => m.LoginPageModule)
  },
  /*
  {
    path: 'register',
    loadChildren: () => import('./registro/register/register.module').then( m => m.RegisterPageModule)
  },
  */
  {
    path: 'recuperar',
    loadChildren: () => import('./registro/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
