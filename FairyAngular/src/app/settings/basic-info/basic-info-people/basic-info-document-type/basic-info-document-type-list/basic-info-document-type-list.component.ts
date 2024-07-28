
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
    selector: 'app-basic-info-document-type-list',
    templateUrl: './basic-info-document-type-list.component.html',
    styleUrl: './basic-info-document-type-list.component.css'
  })
  export class BasicInfoDocumentTypeListComponent implements OnInit{
    constructor(private servicio: BasicInfoService) {}
    documentType:DocumentType[] = [];
    /*
    documentType:DocumentType[] = [];
    Gender:Gender[] = [];
    RelationshipBusiness:RelationshipBusiness[] = [];
    TypeOfDiner:TypeOfDiner[] = [];
    Tradition:Tradition[] = [];
    Culture:Culture[] = [];
    Religion:Religion[] = [];
*/

    ngOnInit(): void { 
      this.obtenerLista();
    }

    obtenerLista ():void{
      this.servicio.ListAllDocumentTypes().subscribe({
        next:(data) =>{
          this.documentType = data;
        }
      });
    }

    eliminarDatos(documentType:DocumentType):void{
      const postData = documentType;
      this.servicio.DeleteDocumentType(postData).subscribe(
        (result) => {
          this.obtenerLista();

        },
        (error) => {
        }
      );
    }

}
