import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteMainComponent } from './clientes/cliente-main/cliente-main.component';
import { ClienteSearchComponent } from './clientes/cliente-search/cliente-search.component';
import { ClienteRegisterComponent } from './clientes/cliente-register/cliente-register.component';
import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';

const routes: Routes = [
  { path: 'buscar', component: ClienteSearchComponent },
  { path: 'registrar', component: ClienteRegisterComponent },
  { path: '', component: ClienteMainComponent  },
  { path: 'editar/:id', component: ClienteEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
