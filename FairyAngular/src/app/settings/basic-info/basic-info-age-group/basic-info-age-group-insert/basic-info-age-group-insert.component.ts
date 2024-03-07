import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { BasicInfoService } from '../../basic-info.service';
import { AgeGroup } from '../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-age-group-insert',
  templateUrl: './basic-info-age-group-insert.component.html',
  styleUrl: './basic-info-age-group-insert.component.css'
})
export class BasicInfoAgeGroupInsertComponent {
  constructor(private servicio: BasicInfoService, private route:Router) {}

  ageGroup:AgeGroup[] = [];
  titulo:string = "LISTA DE CATEGORIAS DE EDAD";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const RegisterAgeGroup = { id: 0, name: this.nombre };
    this.servicio.RegisterAgeGroup(RegisterAgeGroup).subscribe(
      (result) => {
        this.route.navigateByUrl("auth/list-rol");//Redirigir a la lista de AgeGroup
      
      },
      (error) => {}
    );
  }
}



//--------------------------------------------