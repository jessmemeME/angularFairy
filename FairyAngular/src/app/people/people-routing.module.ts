import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ClienteMainComponent } from './clientes/cliente-main/cliente-main.component';
//import { ClienteSearchComponent } from './clientes/cliente-search/cliente-search.component';
import { PeopleRegisterComponent } from './people-register/people-register.component';
import { MatDialogModule } from '@angular/material/dialog';
//import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';

const routes: Routes = [
  //{ path: 'buscar', component: ClienteSearchComponent },
  { path: 'registrar', component: PeopleRegisterComponent },
 // { path: '', component: ClienteMainComponent  },
 // { path: 'editar/:clientId', component: ClienteEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),MatDialogModule],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
