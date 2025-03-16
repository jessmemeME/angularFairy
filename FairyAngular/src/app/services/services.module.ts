import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioFormComponent } from './components/servicio-form/servicio-form.component';
import { ServicioDetallesComponent } from './components/servicio-detalles/servicio-detalles.component';
import { ServiciosDashboardComponent } from './components/servicios-dashboard/servicios-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ServiciosComponent,
    ServicioFormComponent,
    ServicioDetallesComponent,
    ServiciosDashboardComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule
  ]
})
export class ServicesModule { }
