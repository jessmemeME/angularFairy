import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   // Datos para gráficos de barras
  // Esquema de colores para los gráficos
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  // Datos para gráficos de barras
  barChartData = [
    {
      "name": "Enero",
      "value": 5000
    },
    {
      "name": "Febrero",
      "value": 7200
    },
    {
      "name": "Marzo",
      "value": 6100
    },
    {
      "name": "Abril",
      "value": 7800
    }
  ];

  // Datos para gráfico de línea
  lineChartData = [
    {
      "name": "Reservas",
      "series": [
        { "name": "Enero", "value": 120 },
        { "name": "Febrero", "value": 150 },
        { "name": "Marzo", "value": 200 },
        { "name": "Abril", "value": 180 }
      ]
    }
  ];

  // Datos para gráfico de área
  areaChartData = [
    {
      "name": "Ingresos",
      "series": [
        { "name": "Enero", "value": 4000 },
        { "name": "Febrero", "value": 5000 },
        { "name": "Marzo", "value": 7000 },
        { "name": "Abril", "value": 6000 }
      ]
    }
  ];

  // Datos para gráfico de torta (pie chart)
  pieChartData = [
    {
      "name": "Catering",
      "value": 35
    },
    {
      "name": "Música",
      "value": 25
    },
    {
      "name": "Decoración",
      "value": 20
    },
    {
      "name": "Fotografía",
      "value": 20
    }
  ];

  // Datos para gráfico de gauge (medidor)
  gaugeChartData = [
    {
      "name": "Eventos",
      "value": 70
    }
  ];

  // Datos para gráfico de polar
  polarChartData = [
    {
      "name": "Lima",
      "value": 20
    },
    {
      "name": "Cusco",
      "value": 15
    },
    {
      "name": "Arequipa",
      "value": 10
    }
  ];
}
