// material.module.ts
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';  // Puedes agregar otros módulos que necesites
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,  // Exporta otros módulos que usarás en tus componentes
    ReactiveFormsModule,   // Importar ReactiveFormsModule si usas formularios reactivos
  ]
})
export class MaterialModule { }
