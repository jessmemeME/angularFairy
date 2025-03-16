import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];
  displayedColumns: string[] = ['codigo', 'nombre', 'categoria', 'subcategoria', 'estado', 'acciones'];

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    this.serviciosService.getServicios().subscribe(data => {
      this.servicios = data;
    });
  }
}
