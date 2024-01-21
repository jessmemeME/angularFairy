import { Component } from '@angular/core';

import {AuthService} from '../auth.service'
import { Observable } from 'rxjs';
import { AuthGroup } from '../../../models/auth-group.model';
import {Router} from "@angular/router"

@Component({
  selector: 'app-auth-insert',
  templateUrl: './auth-insert.component.html',
  styleUrl: './auth-insert.component.css'
})
export class AuthInsertComponent {
  constructor(private servicio: AuthService, private route:Router) {}

  authGroup:AuthGroup[] = [];
  titulo:string = "LISTA DE ROLES";
  nombre:string = "";
  id:number=0;
  

  enviarDatos ():void{
    const postData = { id: 0, name: this.nombre };
    this.servicio.postData(postData).subscribe(
      (result) => {
        this.route.navigateByUrl("auth/list-rol");
      
      },
      (error) => {}
    );
  }


}
