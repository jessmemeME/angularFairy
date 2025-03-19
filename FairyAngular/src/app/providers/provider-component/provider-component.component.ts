import { Component, OnInit } from '@angular/core';
import { Providers } from '../../../models';
import { ProviderService } from '../services/provider.service';


@Component({
  selector: 'app-provider-component',
  templateUrl: './provider-component.component.html',
  styleUrl: './provider-component.component.css'
})
export class ProviderComponentComponent implements OnInit {
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

  providerData : Providers[] = [];
  filteredList: Providers[] = [];
  
  searchValue: string = '';


  constructor(private providerService: ProviderService) { 

  }
  
  ngOnInit(): void {
    this.getProviders();
  }

  getProviders(): void {
    this.providerService.getProviders()
      .subscribe({
        next: (data) => {
          this.providerData = data;
          this.filteredList = data;
        },
        error: (error) => {
          console.error('❌ Error al obtener proveedores:', error);
        }
      });
  }

  filterList() {
    if (!this.searchValue.trim()) {
      // 🔥 Si el campo de búsqueda está vacío, mostrar todos los proveedores
      this.filteredList = [...this.providerData];
      return;
    }
  
    const searchTerm = this.searchValue.toLowerCase();
  
    this.filteredList = this.providerData.filter(provider =>
      Object.values(provider).some(value =>
        value && value.toString().toLowerCase().includes(searchTerm)
      )
    );
  }
  
}
