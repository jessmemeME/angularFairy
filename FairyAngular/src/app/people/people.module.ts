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
import { MatDialogModule } from '@angular/material/dialog';

//CALENDARIO
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { PeopleModalComponent } from './people-modal/people-modal.component';
import { PeopleSearchAndSelectComponent } from './people-search-and-select/people-search-and-select.component';


@NgModule({
  declarations: [
    //PeopleSearchComponent,
    PeopleRegisterComponent,
    PeopleModalComponent,
    //PeopleMainComponent,
    //PeopleEditComponent
    PeopleModalComponent,
    PeopleSearchAndSelectComponent
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
    MatDialogModule
  ],
  exports: [PeopleRegisterComponent,PeopleModalComponent]
})
export class PeopleModule { }
