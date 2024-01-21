import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AuthService} from './auth.service';
import { AuthListComponent } from './auth-list/auth-list.component';
import { AuthInsertComponent } from './auth-insert/auth-insert.component';
import { AuthUpdateComponent } from './auth-update/auth-update.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import {AuthComponent} from '../auth/auth.component';
 



@NgModule({
  
  declarations: [AuthComponent, AuthListComponent, AuthInsertComponent, AuthUpdateComponent],
  imports: [CommonModule,AuthRoutingModule,FormsModule,RouterModule],
  providers:[AuthService]
})
export class AuthModule { }
