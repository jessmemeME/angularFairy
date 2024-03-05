import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
// Importar los componentes que se van a leer
import { SettingsComponenteComponent } from '../settings-componente/settings-componente.component';
import {BasicInfoComponenteComponent} from "../../basic-info/basic-info-componente/basic-info-componente.component";
import { AuthListComponent } from '../../../auth/auth-list/auth-list.component';
import { AuthPermissionsComponent } from '../../../auth/auth-permissions/auth-permissions.component';
/*
import {AuthInsertComponent} from "../auth-insert/auth-insert.component";
import {AuthListComponent} from "../auth-list/auth-list.component";
import {AuthUpdateComponent} from "../auth-update/auth-update.component";
import {AuthPermissionsComponent} from "../auth-permissions/auth-permissions.component"; 
*/


const routes: Routes = [{
  path:'',
  component: SettingsComponenteComponent,
  children: [
      {path: 'basic-info', component: BasicInfoComponenteComponent},
      //{path: 'add-rol', component: AuthInsertComponent},
      {path: 'list-rol', component: AuthListComponent},
      {path: 'list-group-perission', component: AuthPermissionsComponent},
  ],
},];

@NgModule({
  declarations: [],
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SettingsRoutingModule { }



//
