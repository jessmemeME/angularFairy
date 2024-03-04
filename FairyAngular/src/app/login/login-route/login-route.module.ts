import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { ValidateCodeComponent } from '../validate-code/validate-code.component';

const routes:Routes =[{
  path:'',
  component: LoginComponent,
  children: [
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'reset-pass', component: ResetPasswordComponent},
    {path: 'validate-code', component: ValidateCodeComponent},
],
}]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LoginRouteModule { }
