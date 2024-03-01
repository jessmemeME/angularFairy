
//CONFIGURAMOS EL MODULO QUE NOS PERMITIRA ENRUTAR LAS APLICACIONES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../UI/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige la ruta vacía al módulo de login
  { path: 'login', loadChildren: () => import('../login/login.module').then((m) => m.LoginModule) },
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule) },
  { path: 'account', loadChildren: () => import('../accounts/account.module').then((m) => m.AccountModule) },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }