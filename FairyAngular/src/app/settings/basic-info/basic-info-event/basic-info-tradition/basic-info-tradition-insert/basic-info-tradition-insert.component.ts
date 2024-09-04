import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { BasicInfoService } from '../../../basic-info.service';
import { Tradition } from '../../../../../../models/basic-info.model';

@Component({
  selector: 'app-basic-info-tradition-insert',
  templateUrl: './basic-info-tradition-insert.component.html',
  styleUrl: './basic-info-tradition-insert.component.css'
})
export class BasicInfoTraditionInsertComponent {

  constructor(private servicio: BasicInfoService, private route:Router) {}

  Tradition:Tradition[] = [];
  titulo:string = "LISTA DE TRADICIONES";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const RegisterTradition = { id: 0, name: this.nombre };
    this.servicio.RegisterTradition(RegisterTradition).subscribe(
      (result) => {
        this.route.navigateByUrl("/settings/basic-info/list-tradition");//Redirigir a la lista de Tradition
      
      },
      (error) => {}
    );
  }
}



//--------------------------------------------