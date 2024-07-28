
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
    selector: 'app-basic-info-religion-list',
    templateUrl: './basic-info-religion-list.component.html',
    styleUrl: './basic-info-religion-list.component.css'
  })
  export class BasicInfoReligionListComponent  implements OnInit{
    constructor(private servicio: BasicInfoService) {}
    religion:Religion[] = [];
    /*
    TypeOfDiner:TypeOfDiner[] = [];
    Tradition:Tradition[] = [];
    Culture:Culture[] = [];
    
*/

    ngOnInit(): void { 
      this.obtenerLista();
    }

    obtenerLista ():void{
      this.servicio.ListAllReligions().subscribe({
        next:(data) =>{
          this.religion = data;
        }
      });
    }

    eliminarDatos(religion:Religion):void{
      const postData = religion;
      this.servicio.DeleteReligion(postData).subscribe(
        (result) => {
          this.obtenerLista();

        },
        (error) => {
        }
      );
    }

}
