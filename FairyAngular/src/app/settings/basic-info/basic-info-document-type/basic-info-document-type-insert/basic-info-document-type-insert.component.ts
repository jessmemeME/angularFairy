import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { BasicInfoService } from '../../basic-info.service';
import { DocumentType } from '../../../../../models/basic-info.model'; 

@Component({
  selector: 'app-basic-info-document-type-insert',
  templateUrl: './basic-info-document-type-insert.component.html',
  styleUrl: './basic-info-document-type-insert.component.css'
})
export class BasicInfoDocumentTypeInsertComponent {
  constructor(private servicio: BasicInfoService, private route:Router) {}

  ageGroup:DocumentType[] = [];
  titulo:string = "LISTA DE TIPOS DE DOCUMENTOS";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const RegisterDocumentType = { id: 0, name: this.nombre };
    this.servicio.RegisterDocumentType(RegisterDocumentType).subscribe(
      (result) => {
        this.route.navigateByUrl("auth/list-rol");//Redirigir a la lista de tIPOS DE DOCUMENTOS
      
      },
      (error) => {}
    );
  }
}


