
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { BasicInfoService } from '../../basic-info.service';
import { Religion } from '../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-religion-insert',
  templateUrl: './basic-info-religion-insert.component.html',
  styleUrl: './basic-info-religion-insert.component.css'
})
export class BasicInfoReligionInsertComponent {

  constructor(private servicio: BasicInfoService, private route:Router) {}

  Religion:Religion[] = [];
  titulo:string = "LISTA DE RELIGIONES";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const RegisterReligion = { id: 0, name: this.nombre };
    this.servicio.RegisterReligion(RegisterReligion).subscribe(
      (result) => {
        this.route.navigateByUrl("auth/list-rol");//Redirigir a la lista de Religion
      
      },
      (error) => {}
    );
  }
}



//--------------------------------------------