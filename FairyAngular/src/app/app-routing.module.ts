
//CONFIGURAMOS EL MODULO QUE NOS PERMITIRA ENRUTAR LAS APLICACIONES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Aqui llama a los componentes y servicios de las aplicaciones
import { AccountsComponent } from './accounts/accounts.component';



const routes: Routes = [
  {path:'accounts',component: AccountsComponent},
  {path:'auth', 
  loadChildren:()=>
  import('./auth/auth.module').then((m)=> m.AuthModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }