import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

// Importaciones de módulos
import { LoginRouteModule } from './routes/login-route.module';
import { UtilityModule } from '../utility/utility.module';

// Servicios
import { LoginService } from './services/login.service';

// Componentes
import { LoginComponent } from './login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ValidateCodeComponent } from './components/validate-code/validate-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

// Importaciones de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    ResetPasswordComponent,
    
  ],
  imports: [
    LoginRouteModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule para los formularios reactivos
    UtilityModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIcon,
    MatCheckboxModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LoginService,
  ]
})
export class LoginModule { }
