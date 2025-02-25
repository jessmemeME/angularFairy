import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from '../../clientes.service';
import { clientPageResum, ClientsAndPeople } from '../../../../models';


@Component({
  selector: 'app-cliente-main',
  templateUrl: './cliente-main.component.html',
  styleUrls: ['./cliente-main.component.css']
})
export class ClienteMainComponent implements OnInit {
  // Define las columnas que se mostrarán en la tabla
  displayedColumns: string[] = ['nro', 'nombres', 'apellidos', 'tipoDocumento', 'numeroDocumento', 'estado', 'acciones'];

  // Datos de ejemplo para la tabla de clientes
  clientesRow :clientPageResum[]= [];
  clientesRow2 :any[]= [];
  clientes= new MatTableDataSource();
  /*aux = new MatTableDataSource([
    { nro: 1, nombres: 'Jessica Dahiana', apellidos: 'Rodriguez Prieto', tipoDocumento: 'Cédula', numeroDocumento: '4893744', estado: 'Cliente Activo' },
    { nro: 2, nombres: 'Alvaro Augusto', apellidos: 'Ortiz Duarte', tipoDocumento: 'Pasaporte', numeroDocumento: 'A1234567', estado: 'Cliente Inactivo' },
    { nro: 3, nombres: 'Ana Carolina', apellidos: 'González Diarte', tipoDocumento: 'Pasaporte', numeroDocumento: 'A1234567', estado: 'Prospecto' }
  ]);*/



  constructor(private router: Router,private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getClientes(1).subscribe((data: any) => {
      console.log('Clientes:', data);
      this.clientesRow = data;
      let cliente: any= {};
      if (this.clientesRow.length > 0) {
        for (let i = 0; i < this.clientesRow.length; i++) {
          cliente.nro = i + 1;
          cliente.nombres = this.clientesRow[i].first_name;
          cliente.apellidos = this.clientesRow[i].last_name;
          cliente.tipoDocumento = this.clientesRow[i].document_type;
          cliente.numeroDocumento = this.clientesRow[i].document_number;
          cliente.estado = this.clientesRow[i].status;
          this.clientesRow2.push(cliente);
          cliente = {};
        }
        this.clientes= new MatTableDataSource(this.clientesRow2); 
      }
      console.log('Clientes:', this.clientes);
    });
  }

  // Función para redirigir a la pantalla de registro
  registrarCliente(): void {
    this.router.navigate(['/clients/registrar']);
  }

  // Función para redirigir a la pantalla de modificación
editarCliente(cliente: any): void {
  console.log('Editar cliente:', cliente);
  this.router.navigate(['/clients/editar', cliente.nro]);  // Pasar el ID del cliente en la URL
}


  // Filtrar clientes por estado
  filtrarPorEstado(estado: string): void {
    console.log('Filtrar por estado:', estado);
    // Lógica para filtrar la tabla según el estado seleccionado
  }
}
