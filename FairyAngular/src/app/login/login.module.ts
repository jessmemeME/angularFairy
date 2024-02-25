import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { LoginRouteModule } from './login-route/login-route.module';
import { UtilityModule } from '../utility/utility.module';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule, LoginRouteModule, RouterModule, FormsModule, UtilityModule,
  ], 
  providers:[LoginService]
})
export class LoginModule { }
