import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { BasicInfoService } from '../../../basic-info.service';
import { AgeGroup } from '../../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-age-group-insert',
  templateUrl: './basic-info-age-group-insert.component.html',
  styleUrls: ['./basic-info-age-group-insert.component.css']
})
export class BasicInfoAgeGroupInsertComponent {
  constructor(private servicio: BasicInfoService, private route: Router) {}

  ageGroup: AgeGroup[] = [];
  titulo: string = "LISTA DE CATEGORIAS DE EDAD";
  nombre: string = "";
  rangoDesde: number | null = null;
  rangoHasta: number | null = null;
  descripcion: string = "";
  estado: boolean = true;

  // Campos de auditoría
  created_date: string = "";
  updated_date: string = "";
  created_user_id: number = 1; // Usuario por defecto es el de id=1 (superadministrador)
  updated_user_id: number = 1; // Usuario por defecto es el de id=1 (superadministrador)

  // Para controlar los campos obligatorios
  camposObligatoriosCompletos: boolean = false;

  checkCamposObligatorios(): void {
    this.camposObligatoriosCompletos = !!this.nombre && !!this.rangoDesde && !!this.rangoHasta;
  }

  enviarDatos(): void {
    // Validación de campos obligatorios
    if (!this.camposObligatoriosCompletos) {
      alert('Por favor complete todos los campos obligatorios (Nombre, Rango desde, Rango hasta)');
      return;
    }

    // Validaciones adicionales
    if (this.rangoDesde === null || this.rangoHasta === null) {
      alert('Por favor ingrese valores válidos para los campos "Desde" y "Hasta"');
      return;
    }

    if (isNaN(this.rangoDesde) || isNaN(this.rangoHasta)) {
      alert('Los valores ingresados deben ser números');
      return;
    }

    if (this.rangoDesde >= this.rangoHasta) {
      alert('El valor del campo "Desde" debe ser menor que el valor del campo "Hasta"');
      return;
    }

    // Validar duplicados en la lista existente
    const duplicado = this.ageGroup.some(item => {
      return item.name === this.nombre && item.age_range === `${this.rangoDesde}-${this.rangoHasta}`;
    });

    if (duplicado) {
      alert('Ya existe un registro con los mismos valores de Nombre y Rango.');
      return;
    }

    const rango = `${this.rangoDesde}-${this.rangoHasta}`;
    const now = new Date();
    const fechaActual = now.toISOString(); // Convertir la fecha a formato ISO

    // Crear el objeto para insertar en la base de datos
    const nuevoRegistro: AgeGroup = {
      name: this.nombre,
      description: this.descripcion,
      age_range: rango,
      is_active: this.estado,
      created_date: fechaActual, // Asignar la fecha actual al campo created_date
      updated_date: fechaActual, // Asignar la fecha actual al campo updated_date
      created_user_id: this.created_user_id,
      updated_user_id: this.updated_user_id
    };

    // Mostrar en consola el objeto que se está enviando
    console.log('Objeto a enviar:', nuevoRegistro);

    // Llamar al servicio para insertar el nuevo registro
    this.servicio.RegisterAgeGroup(nuevoRegistro).subscribe(
      () => {
        // Redirigir a la lista de categorías de edad después de la inserción exitosa
        this.route.navigateByUrl("settings/list-age-group");
      },
      (error) => {
        // Manejar errores en caso de que falle la inserción
        console.error('Error al insertar el registro:', error);
        alert('Error al insertar el registro. Por favor, inténtelo de nuevo.');
      }
    );
  }
}
