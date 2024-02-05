import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AuthInsertComponent} from "../auth-insert/auth-insert.component";
import {AuthListComponent} from "../auth-list/auth-list.component";
import {AuthUpdateComponent} from "../auth-update/auth-update.component";
import {AuthComponent} from "../auth.component"
import {AuthPermissionsComponent} from "../auth-permissions/auth-permissions.component";

const routes: Routes = [{
  path:'',
  component: AuthComponent,
  children: [
      {path: 'update-rol', component: AuthUpdateComponent},
      {path: 'add-rol', component: AuthInsertComponent},
      {path: 'list-rol', component: AuthListComponent},
      {path: 'list-group-perission', component: AuthPermissionsComponent},
  ],
},];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
