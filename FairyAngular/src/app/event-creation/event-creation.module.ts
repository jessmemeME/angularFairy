import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { EventBasicDetailsComponent } from './components/event-basic-details/event-basic-details.component';
import { EventCeremoniesComponent } from './components/event-ceremonies/event-ceremonies.component';
import { EventGuestsComponent } from './components/event-guests/event-guests.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; // Asegurar que MatIconModule está importado
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; // Para la paginación
import { MatSortModule } from '@angular/material/sort'; // Para ordenar
import { MatChipsModule } from '@angular/material/chips';
import { EventCreationRoutingModule } from './event-creation-routing/event-creation-routing.module';
import { CdkTableModule } from '@angular/cdk/table'; // ✅ Agregado para solucionar _CdkColumnDef error


@NgModule({
  declarations: [
    
    EventCreationComponent,
    EventBasicDetailsComponent,
    EventCeremoniesComponent,
    EventGuestsComponent,
    EventListComponent
  ],
  imports: [
    EventCreationRoutingModule,
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule, // Opcional si usas paginación
    MatSortModule, // Opcional si usas ordenamiento
    FormsModule,
    MatChipsModule,
    CdkTableModule

  ],
  exports: [
    EventCreationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventCreationModule { }
