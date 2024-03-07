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
    selector: 'app-basic-info-culture-list',
    templateUrl: './basic-info-culture-list.component.html',
    styleUrl: './basic-info-culture-list.component.css'
  })
  export class BasicInfoCultureListComponent  implements OnInit{
    constructor(private servicio: BasicInfoService) {}
    culture:Culture[] = [];

    ngOnInit(): void { 
      this.obtenerLista();
    }

    obtenerLista ():void{
      this.servicio.ListAllCultures().subscribe({
        next:(data) =>{
          this.culture = data;
        }
      });
    }

    eliminarDatos(culture:Culture):void{
      const postData = culture;
      this.servicio.DeleteCulture(postData).subscribe(
        (result) => {
          this.obtenerLista();

        },
        (error) => {
        }
      );
    }

}
