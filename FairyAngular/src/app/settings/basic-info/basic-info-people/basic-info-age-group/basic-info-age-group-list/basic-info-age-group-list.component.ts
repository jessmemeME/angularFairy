import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicInfoService } from '../../../basic-info.service';
import { AgeGroup,
  DocumentType,
  Gender,
  RelationshipBusiness,
  TypeOfDiner,
  Tradition,
  Culture,
  Religion } from '../../../../../../models/basic-info.model';


  @Component({
    selector: 'app-basic-info-age-group-list',
    templateUrl: './basic-info-age-group-list.component.html',
    styleUrl: './basic-info-age-group-list.component.css'
  })
  
  export class BasicInfoAgeGroupListComponent implements OnInit{
    constructor(private servicio: BasicInfoService) {}
    ageGroup:AgeGroup[] = [];

    ngOnInit(): void { 
      this.obtenerLista();
    }


    obtenerLista(): void {
      this.servicio.ListAllAgeGroups().subscribe({
        next: (data: AgeGroup[]) => {
          console.log('Mostrar lo que hay en data:',data);
          // Ordenar por ID de forma ascendente
          this.ageGroup = data.sort((a, b) => {
            if (a.id !== undefined && b.id !== undefined) {
              return a.id - b.id;
            }
            return 0; // Otra opción podría ser devolver -1 o 1 dependiendo de tu lógica
          });
          
        },
        error: (error) => {
          console.error('Error al obtener la lista de categorías de edad:', error);
        }
      });
    }

    eliminarDatos(ageGroup:AgeGroup):void{
      const postData = ageGroup;
      this.servicio.DeleteAgeGroups(postData).subscribe(
        (result) => {
          this.obtenerLista();

        },
        (error) => {
        }
      );
    }

    

}