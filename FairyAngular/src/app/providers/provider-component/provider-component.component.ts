import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-component',
  templateUrl: './provider-component.component.html',
  styleUrl: './provider-component.component.css'
})
export class ProviderComponentComponent {
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
}
