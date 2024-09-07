import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteSearchComponent } from './clientes/cliente-search/cliente-search.component';
import { ClienteRegisterComponent } from './clientes/cliente-register/cliente-register.component';

const routes: Routes = [
  { path: 'buscar', component: ClienteSearchComponent },
  { path: 'registrar', component: ClienteRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
