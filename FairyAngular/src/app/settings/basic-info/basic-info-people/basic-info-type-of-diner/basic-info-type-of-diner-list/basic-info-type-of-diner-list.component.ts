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
    selector: 'app-basic-info-type-of-diner-list',
    templateUrl: './basic-info-type-of-diner-list.component.html',
    styleUrl: './basic-info-type-of-diner-list.component.css'
  })
  export class BasicInfoTypeOfDinerListComponent implements OnInit{
    constructor(private servicio: BasicInfoService) {}
    typeOfDiner:TypeOfDiner[] = [];
    /*
    
    Tradition:Tradition[] = [];
    Culture:Culture[] = [];
    
*/

    ngOnInit(): void { 
      this.obtenerLista();
    }

    obtenerLista ():void{
      this.servicio.ListAllTypeOfDiners().subscribe({
        next:(data) =>{
          this.typeOfDiner = data;
        }
      });
    }

    eliminarDatos(typeOfDiner:TypeOfDiner):void{
      const postData = typeOfDiner;
      this.servicio.DeleteTypeOfDiner(postData).subscribe(
        (result) => {
          this.obtenerLista();

        },
        (error) => {
        }
      );
    }

}
