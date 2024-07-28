
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { BasicInfoService } from '../../../basic-info.service';
import { RelationshipBusiness } from '../../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-relationship-business-insert',
  templateUrl: './basic-info-relationship-business-insert.component.html',
  styleUrl: './basic-info-relationship-business-insert.component.css'
})
export class BasicInfoRelationshipBusinessInsertComponent {

  constructor(private servicio: BasicInfoService, private route:Router) {}

  RelationshipBusiness:RelationshipBusiness[] = [];
  titulo:string = "LISTA DE TIPOS DE RELACION CON LA EMPRESA";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const RegisterRelationshipBusiness = { id: 0, name: this.nombre };
    this.servicio.RegisterRelationshipBusiness(RegisterRelationshipBusiness).subscribe(
      (result) => {
        this.route.navigateByUrl("auth/list-rol");//Redirigir a la lista de RelationshipBusiness
      
      },
      (error) => {}
    );
  }
}



//--------------------------------------------