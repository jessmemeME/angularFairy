import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../login.component';
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';
import { ValidateCodeComponent } from '../components/validate-code/validate-code.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'create-account', pathMatch: 'full' }, // 🔥 Redirección automática
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'reset-pass', component: ResetPasswordComponent },
      { path: 'validate-code', component: ValidateCodeComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRouteModule { }
