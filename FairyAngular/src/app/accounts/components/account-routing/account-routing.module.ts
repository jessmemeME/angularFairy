import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { AccountListComponent } from '../account-list/account-list.component';
import { AccountInsertComponent } from '../account-insert/account-insert.component';
import { AccountUpdateComponent } from '../account-update/account-update.component';
import { AccountPermissionsComponent } from '../account-permissions/account-permissions.component';


const routes: Routes = [{
  path:'',
 // component: AccountsComponent,
  children: [
      {path: 'update-account', component: AccountUpdateComponent},
      {path: 'add-account', component: AccountInsertComponent},
      {path: 'list-account', component: AccountListComponent},
      {path: 'permiision-account', component: AccountPermissionsComponent},
  ],
},];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AccountRoutingModule { }
