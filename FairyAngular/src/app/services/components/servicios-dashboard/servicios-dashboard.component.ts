import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-dashboard',
  templateUrl: './servicios-dashboard.component.html',
  styleUrls: ['./servicios-dashboard.component.scss']
})
export class ServiciosDashboardComponent implements OnInit {
  serviciosPorCategoria = [
    { name: "Series 1", value: 35 },
    { name: "Series 2", value: 30 },
    { name: "Series 3", value: 21 }
  ];

  serviciosMasSolicitados = [
    { name: "Servicio 1", value: 6 },
    { name: "Servicio 2", value: 3 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
