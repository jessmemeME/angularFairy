import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { BasicInfoService } from '../../basic-info.service';
import { Gender } from '../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-gender-insert',
  templateUrl: './basic-info-gender-insert.component.html',
  styleUrl: './basic-info-gender-insert.component.css'
})
export class BasicInfoGenderInsertComponent {
  constructor(private servicio: BasicInfoService, private route:Router) {}

  Gender:Gender[] = [];
  titulo:string = "LISTA DE CATEGORIAS DE GENEROS";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const RegisterGender = { id: 0, name: this.nombre };
    this.servicio.RegisterGender(RegisterGender).subscribe(
      (result) => {
        this.route.navigateByUrl("auth/list-rol");//Redirigir a la lista de Gender
      
      },
      (error) => {}
    );
  }
}



//--------------------------------------------