import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { LoginRouteModule } from './login-route/login-route.module';
import { UtilityModule } from '../utility/utility.module';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ValidateCodeComponent } from './validate-code/validate-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';
import { LoginApiService } from './login-api.service';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    ValidateCodeComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule, LoginRouteModule, RouterModule, FormsModule, UtilityModule,
  ], 
  providers:[
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    LoginService,
    LoginApiService
  ]
})
export class LoginModule { }
