
//CONFIGURAMOS EL MODULO QUE NOS PERMITIRA ENRUTAR LAS APLICACIONES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path:'auth', 
  loadChildren:()=>
  import('./auth/auth.module').then((m)=> m.AuthModule), },
  {path:'account', 
  loadChildren:()=>
  import('./accounts/account.module').then((m)=> m.AccountModule), },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }