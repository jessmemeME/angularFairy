import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { BasicInfoService } from '../../../basic-info.service';
import { Culture } from '../../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-culture-insert',
  templateUrl: './basic-info-culture-insert.component.html',
  styleUrl: './basic-info-culture-insert.component.css'
})
export class BasicInfoCultureInsertComponent {
  constructor(private servicio: BasicInfoService, private route:Router) {}

  culture:Culture[] = [];
  titulo:string = "LISTA DE CULTURAS";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const RegisterCulture = { id: 0, name: this.nombre };
    this.servicio.RegisterCulture(RegisterCulture).subscribe(
      (result) => {
        this.route.navigateByUrl("auth/list-rol");//Redirigir a la lista de Culturas
      
      },
      (error) => {}
    );
  }
}


