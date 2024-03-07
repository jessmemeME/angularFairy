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
    selector: 'app-basic-info-relationship-business-list',
    templateUrl: './basic-info-relationship-business-list.component.html',
    styleUrl: './basic-info-relationship-business-list.component.css'
  })
  export class BasicInfoRelationshipBusinessListComponent  implements OnInit{
    constructor(private servicio: BasicInfoService) {}
    relationshipBusiness:RelationshipBusiness[] = [];
    /*
    TypeOfDiner:TypeOfDiner[] = [];
    Tradition:Tradition[] = [];
    Culture:Culture[] = [];
    Religion:Religion[] = [];
*/

    ngOnInit(): void { 
      this.obtenerLista();
    }

    obtenerLista ():void{
      this.servicio.ListAllRelationshipBusiness().subscribe({
        next:(data) =>{
          this.relationshipBusiness = data;
        }
      });
    }

    eliminarDatos(relationshipBusiness:RelationshipBusiness):void{
      const postData = relationshipBusiness;
      this.servicio.DeleteRelationshipBusiness(postData).subscribe(
        (result) => {
          this.obtenerLista();

        },
        (error) => {
        }
      );
    }

}
