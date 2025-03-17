import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PeopleRoutingModule } from './people-routing.module';
//import { PeopleSearchComponent } from './people-search/People-search.component';
import { PeopleRegisterComponent } from './people-register/people-register.component';
//import { PeopleMainComponent } from './paraeople-main/People-main.component';
//import { PeopleEditComponent } from './people-edit/People-edit.component';

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
    //PeopleSearchComponent,
    PeopleRegisterComponent,
    //PeopleMainComponent,
    //PeopleEditComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
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
  ],
  exports: [PeopleRegisterComponent]
})
export class PeopleModule { }
