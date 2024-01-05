
//CONFIGURAMOS EL MODULO QUE NOS PERMITIRA ENRUTAR LAS APLICACIONES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Aqui llama a los componentes y servicios de las aplicaciones
import { AccountsComponent } from './accounts/accounts.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path:'accounts',component: AccountsComponent},
  { path:'role',component: AuthComponent},
  { path:'customer',component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }