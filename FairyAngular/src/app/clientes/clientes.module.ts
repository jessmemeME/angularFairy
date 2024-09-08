import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteSearchComponent } from './clientes/cliente-search/cliente-search.component';
import { ClienteRegisterComponent } from './clientes/cliente-register/cliente-register.component';
import { ClienteMainComponent } from './clientes/cliente-main/cliente-main.component';
import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';  // Importar MatGridListModule
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatCheckboxModule } from '@angular/material/checkbox';

//CALENDARIO
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ClienteSearchComponent,
    ClienteRegisterComponent,
    ClienteMainComponent,
    ClienteEditComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    //Modulos del materialize
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatGridListModule,
    MatOptionModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTableModule, // Para usar mat-table
    MatIconModule,  // Para usar mat-icon
  ]
})
export class ClientesModule { }
