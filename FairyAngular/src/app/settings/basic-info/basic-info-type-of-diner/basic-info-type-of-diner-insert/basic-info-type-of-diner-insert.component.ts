

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { BasicInfoService } from '../../basic-info.service';
import { TypeOfDiner } from '../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-type-of-diner-insert',
  templateUrl: './basic-info-type-of-diner-insert.component.html',
  styleUrl: './basic-info-type-of-diner-insert.component.css'
})
export class BasicInfoTypeOfDinerInsertComponent {

  constructor(private servicio: BasicInfoService, private route:Router) {}

  TypeOfDiner:TypeOfDiner[] = [];
  titulo:string = "LISTA DE TIPOS DE COMENSALES";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const RegisterTypeOfDiner = { id: 0, name: this.nombre };
    this.servicio.RegisterTypeOfDiner(RegisterTypeOfDiner).subscribe(
      (result) => {
        this.route.navigateByUrl("auth/list-rol");//Redirigir a la lista de TypeOfDiner
      
      },
      (error) => {}
    );
  }
}



//--------------------------------------------