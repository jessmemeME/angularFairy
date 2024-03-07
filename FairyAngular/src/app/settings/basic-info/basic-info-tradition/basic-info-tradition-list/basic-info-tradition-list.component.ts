import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicInfoService } from '../../basic-info.service';
import { AgeGroup,
  DocumentType,
  Gender,
  RelationshipBusiness,
  TypeOfDiner,
  Tradition,
  Culture,
  Religion } from '../../../../../models/basic-info.model';

  @Component({
    selector: 'app-basic-info-tradition-list',
    templateUrl: './basic-info-tradition-list.component.html',
    styleUrl: './basic-info-tradition-list.component.css'
  })
  export class BasicInfoTraditionListComponent implements OnInit{
    constructor(private servicio: BasicInfoService) {}
    tradition:Tradition[] = [];
    /*
    
    
    Culture:Culture[] = [];
    
*/

    ngOnInit(): void { 
      this.obtenerLista();
    }

    obtenerLista ():void{
      this.servicio.ListAllTraditions().subscribe({
        next:(data) =>{
          this.tradition = data;
        }
      });
    }

    eliminarDatos(tradition:Tradition):void{
      const postData = tradition;
      this.servicio.DeleteTradition(postData).subscribe(
        (result) => {
          this.obtenerLista();

        },
        (error) => {
        }
      );
    }

}
