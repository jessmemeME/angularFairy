
//


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
    selector: 'app-basic-info-gender-list',
    templateUrl: './basic-info-gender-list.component.html',
    styleUrl: './basic-info-gender-list.component.css'
  })
  export class BasicInfoGenderListComponent implements OnInit{
    constructor(private servicio: BasicInfoService) {}
    gender:Gender[] = [];
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
      this.servicio.ListAllGenders().subscribe({
        next:(data) =>{
          this.gender = data;
        }
      });
    }

    eliminarDatos(gender:Gender):void{
      const postData = gender;
      this.servicio.DeleteGender(postData).subscribe(
        (result) => {
          this.obtenerLista();

        },
        (error) => {
        }
      );
    }

}
