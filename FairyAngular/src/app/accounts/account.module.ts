import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing/account-routing.module';
import { AccountInsertComponent } from './account-insert/account-insert.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import {AccountsComponent} from './accounts.component'
import { AccountsService } from './accounts.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AccountInsertComponent,
    AccountListComponent,
    AccountUpdateComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    RouterModule,
  ],providers:[
    AccountsService
  ]
})
export class AccountModule { }
