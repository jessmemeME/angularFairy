import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './components/account-routing/account-routing.module';
import { AccountInsertComponent } from './components/account-insert/account-insert.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { AccountsComponent } from './accounts.component';
import { AccountsService } from './services/accounts.service';
import { FormsModule } from '@angular/forms';
import { AccountPermissionsComponent } from './components/account-permissions/account-permissions.component';

@NgModule({
  declarations: [
    AccountInsertComponent,
    AccountListComponent,
    AccountUpdateComponent,
    AccountsComponent, 
    AccountPermissionsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule, 
    FormsModule 
  ],
  providers: [
    AccountsService
  ]
})
export class AccountModule { }
